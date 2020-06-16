const express = require('express');
const app = express();

const api = require('./api');
app.use('/api/v1', api);

app.use(express.static('client/static'));

/**
 * @route GET /
 * @description landing page that lists all articles 
 */
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/views/index.html`);
});

/**
 * @route GET /articles/new 
 * @description page to create a new article
 */
app.get('/articles/new', (req, res) => {
    res.sendFile(`${__dirname}/client/views/newArticle.html`);
});

/**
 * @route GET /articles/:id (id is the url save representation of the article's name)
 * @description link to an article page (requests the article's html body from /api/v1/articles/:id)
 */
app.get('/articles/:id', (req, res) => {
    res.sendFile(`${__dirname}/client/views/article.html`);
});

/**
 * @route GET /notFound
 * @description 404 resource not found page
 */
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/views/notFound.html`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 app is listening on port ${port}`);
})