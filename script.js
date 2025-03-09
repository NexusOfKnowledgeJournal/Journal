function searchSite() {
    let query = document.getElementById('search-bar').value.toLowerCase();
    let pages = {
        'home': 'index.html',
        'authors': 'authors.html',
        'publications': 'publications.html',
        'faq': 'faq.html'
    };

    for (let key in pages) {
        if (key.includes(query)) {
            window.location.href = pages[key];
            break;
        }
    }
}
