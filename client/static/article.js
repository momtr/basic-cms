$(document).ready(async () => {

    /** request article */
    let name = window.location.href.split('articles/')[1];
    let articles = await fetch(`/api/v1/articles/${name}`);
    let json = await articles.json();

    /** check if article exists */
    if(json.status != 'success') {
        window.location.href = '/notfound'
    } 
    
    /** display article */
    $('#site-title').html(`Rackod Blog - ${json.data.heading}`);
    $('#article-heading').html(json.data.heading);
    $('#article-body').html(json.data.body);
    $('#article-author').html(`@ ${json.data.author}`);
    let date = new Date(json.data.createdAt);
    $('#article-created-on').html(`from ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);

})