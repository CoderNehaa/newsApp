import React from 'react';
import pageStyle from './newscard.module.css';

const NewsCard = ({news}) => {
  function addToFavorites(obj){

  }
  
  function handleClick(){
    window.location.href = news.url;
  }

  return (
      <div className={pageStyle.newsBox} onClick={handleClick}>
        <div> <img src={news.urlToImage}/></div>
        <button onClick={() => addToFavorites(news)}> <i class="fa-solid fa-heart"></i> </button>
        <h2> {news.title} </h2>
        <h4> {news.publishedAt} </h4>
        <p> {news.content} </p>
      </div>
  )
}

export default NewsCard
