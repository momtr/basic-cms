const express = require('express');
const router = express.Router();

const sendError = require('../handlers').sendError;
const sendSuccess = require('../handlers').sendSuccess;
const schemas = require('../schemas');
const FirebaseRealTime = require('../db');
const db = new FirebaseRealTime();
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
}).use(require('markdown-it-highlightjs'));

/**
 * @route GET /api/v1/
 * @description mainly used for debugging
 */
router.get('/', (req, res, next) => {
    sendSuccess(res, 'Welcome to the API!');
});

/**
 * @route GET /api/v1/articles
 * @description get all articles (only url name and title) from the DB
 */
router.get('/articles', async (req, res, next) => {
    let articles = await db.getData('articles_ids');
    sendSuccess(res, 'All articles given!', articles);
});

/**
 * @route GET /api/v1/articles/:id
 * @description get article from DB by its ID
 */
router.get('/articles/:id', async (req, res, next) => {
    let error = schemas.article_id.validate(req.params).error;
    if(error) {
        sendError(res, `Article ID not given or not complete! Error: ${error}`, 1, 400);
        return;
    }
    let article = await db.getData(`articles/${req.params.id}`);
    if(!article) {
        sendError(res, `Article with ID '${req.params.id}' does not exist!`, 2, 404);
        return;
    }
    sendSuccess(res, 'Article given!', article);
});

/**
 * @route POST /api/v1/articles/:id
 * @description add a new article to the DB
 */
router.post('/articles', (req, res, next) => {
    /** validate input */
    let error = schemas.article.validate(req.query).error;
    if(error) {
        sendError(res, `Bad request! Error: ${error}`, 3, 400);
        return;
    }
    /** convert to html */
    let html = md.render(req.query.body);
    /** save in DB */
    req.query.createdAt = Date.now();
    req.query.body_markdown = req.query.body;
    req.query.body = html;
    db.insertData('articles', req.query.url_name, req.query);
    db.insertData('articles_ids', req.query.url_name, { timestamp: Date.now(), heading: req.query.heading });
    /** send response back */
    sendSuccess(res, 'Successfully added article!');
});

module.exports = router;