/* eslint-disable no-undef */
let searchHeader = document.querySelector('#searchHeader');
let searchInput = document.querySelector('#keywordSearch');
let searchForm = document.querySelector('#searchRocket');
let searchedContainer = document.querySelector('#searchedContainer');
let searchForArticles = document.querySelector('#searchForArticles');
let searchForImages = document.querySelector('#searchForImages');
let searchedForText;
let responseContainer = document.querySelector('#searchResult');
searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchInput.value;
        searchHeader.classList.add('userSearched')
        searchedContainer.classList.add('userSearched')
        if (searchForImages.checked == true) {
                // $.ajax({
                //         url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}&per_page=30`,
                //         headers: {
                //                 Authorization: 'Client-ID e9aaca0cb4dd0f9b78538cb6e23cb382ddf4212aba203384ada72a698143308c'
                //         }
                // }).done(searchImages).fail(requestError)
                fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}&per_page=30`, {
                        headers: {
                                Authorization: 'Client-ID e9aaca0cb4dd0f9b78538cb6e23cb382ddf4212aba203384ada72a698143308c'
                        }
                })
                        .then(response => response.json())
                        .then(searchImages)
                        .catch(requestError)
        }

        if (searchForArticles.checked == true) {
                $.ajax({
                        url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}&per_page=1`,
                        headers: {
                                Authorization: 'Client-ID e9aaca0cb4dd0f9b78538cb6e23cb382ddf4212aba203384ada72a698143308c'
                        }
                }).done(searchImage).fail(requestError)
                $.ajax({
                        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=W67YGfysIcZhA07KbZcYLAtrLW3SpS93`,

                }).done(searchItemArticle).fail(requestError)
        }
        function searchImages(images) {
                for (let i = 0; i < images.results.length; i++) {
                        var getImageInfo = images.results[i]
                        let addingImages = `
                                <div class='searchedItem'>
                                        <p class='imageSearchedContent'>${getImageInfo.alt_description}</p>
                                        <img class='imageSearch' src='${getImageInfo.urls.regular}' alt='${searchedForText}'>
                                        <span class='itemCopyRight'>Thanks To <strong>${getImageInfo.user.name} </strong><a href='https://unsplash.com/'>(Unsplash.com)</a></span>
                                        <div class='downloadImage'>
                                                <span class='downloadHeading'>Download: </span>
                                                <a href='${getImageInfo.urls.raw}'>Source</a><a href='${getImageInfo.urls.full}'>High</a>
                                                <a href='${getImageInfo.urls.regular}'>Regular</a><a href='${getImageInfo.urls.small}'>Small</a>
                                                <a href='${getImageInfo.urls.thumb}'>Tiny</a>
                                        </div>
                                </div>`
                        responseContainer.insertAdjacentHTML('afterbegin', addingImages)
                }
        }
        function searchImage(image) {
                responseContainer.classList.add('article')
                var getImageInfo = image.results[0]
                let addingImages = `
                        <div class='searchedItem imageArticle'>
                                <p class='imageSearchedContent'>${getImageInfo.alt_description}</p>
                                <img class='imageSearch' src='${getImageInfo.urls.regular}' alt='${searchedForText}'>
                                <span class='itemCopyRight'>Thanks To
                                        <strong>${getImageInfo.user.name}</strong>
                                        <a href='${getImageInfo.links.html}' target='_blank'>Get image on Unsplash.com</a>
                                </span>
                        </div>`
                responseContainer.insertAdjacentHTML('afterbegin', addingImages)
        }
        function searchItemArticle(article) {
                let articleContentContainer = `<div id='articleContentContainer'></div>`
                responseContainer.insertAdjacentHTML('beforeend', articleContentContainer)
                for (let i = 0; i < 4; i++) {
                        let getArticles = article.response.docs[i]
                        let keyWordsContainer = document.createElement('div')
                        keyWordsContainer.setAttribute('id', 'keyWords')
                        for (let x = 0; x < getArticles.keywords.length; x++) {
                                if (x < 3) {
                                        let keyWordContent = getArticles.keywords[x].value
                                        let keyWord = document.createElement('span')
                                        keyWord.setAttribute('class', 'articleKeywords')
                                        keyWord.innerText = keyWordContent
                                        keyWordsContainer.appendChild(keyWord)
                                }
                        }
                        let addingArticles = `
                                <div class='articleContent'>
                                        <a href='${getArticles.web_url}'>${getArticles.headline.main} <strong>${getArticles.byline.original}</strong></a>
                                        <p class='contentBrief'>${getArticles.snippet}</p>
                                        ${keyWordsContainer.outerHTML}
                                </div>`
                        let allArticlesContent = document.querySelector('#articleContentContainer');
                        allArticlesContent.insertAdjacentHTML('afterbegin', addingArticles)
                }
        }
        function requestError(err) { console.log(err.responseText); }
});
