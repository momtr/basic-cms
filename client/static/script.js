$(document).ready(async () => {

    /** request articles */
    let articles = await fetch('/api/v1/articles');
    let json = await articles.json();
    let names = Object.keys(json.data);
    names.sort((a, b) => {
        if(json.data[a].timestamp > json.data[b].timestamp)
            return -1;
        return 1;
    });

    /** display articles with links */
    let ref = $('#articles');
    for(let i of names) {
        ref.append(`
            <div class="article-card">
                <h3 class="article-card-heading light" onclick="window.location = '/articles/${i}'">${json.data[i].heading}</h3>
            </div>
        `)
    }

})