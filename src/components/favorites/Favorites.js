import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pageStyle from './favorites.module.css';

import { removeFromFavorites } from '../../redux/reducers/userReducer';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.userReducer.favorites);
    
    return (
      <>
        <h1> Your Favorite Articles </h1>
        <div className={pageStyle.favoritesBox}>
          {favoritesList.map((news, index) => (
            <div className={pageStyle.newsBox} key={index}>
              <div> <img src={news.urlToImage}/></div>
              <button onClick={() => dispatch(removeFromFavorites(news))} className={pageStyle.favBtn}> 
                <i className="fa-solid fa-heart-circle-minus"></i> 
              </button>
              <h2> {news.title} </h2>
              <h4> {news.publishedAt} </h4>
              <p> {news.content} </p>
            </div>  
            ))}
        </div>
      </>
    )
}

export default Favorites;
