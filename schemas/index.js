const Joi = require('joi');

const article = Joi.object({
    heading: Joi.string().min(3).max(20).required(),
    body: Joi.string().min(3).max(10000).required(),
    url_name: Joi.string().regex(/^[A-Za-z_-]+/).required(),
    author: Joi.string().min(1).max(30).required()
});

const article_id = Joi.object({
    id: Joi.string().regex(/^[A-Za-z_-]+/).required()
});

module.exports = { article, article_id };