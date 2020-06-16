function postArticle() {

    /** get values */
    let heading = $('#heading').val();
    let url_name = $('#url_name').val();
    let body = $('#body').val();
    let author = $('#author').val();

    /** validation */
    if(!heading || !url_name || !body || !author) {
        $('#error-message').html('Please fill in very field.');
        return;
    } 

    /** post article */
    const params = { heading, url_name, body, author };
    const searchParams = new URLSearchParams(params).toString();

    fetch(`/api/v1/articles?${searchParams}`, { method: 'POST' })
        .then(data => data.json())
        .then(json => {
            window.open(`/articles/${url_name}`);
        })
        .catch(e => {
            $('#error-message').html('Error');
        })

}