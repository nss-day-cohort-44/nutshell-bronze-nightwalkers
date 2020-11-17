import {useArticles,getArticles} from "./articleprovider.js"
import {articleCard} from"./article.js"

const eventHub = document.querySelector(".container")
// getting data from api

export const articleList = () =>{
    getArticles()
    .then(() =>{
        const articles = useArticles()
        render(articles)
    })
}

// responding to CustomEvent from Provider.js

eventHub.addEventListener("articlechanged",() =>articleList())

// rendering & putting into Dom

const render = (articleArray) =>{
    let articleHTML = ""
    for(const news of articleArray){
        articleHTML += articleCard(news)
    }
    articlecontainer.innerHTML = `
      ${articleHTML}`
    }