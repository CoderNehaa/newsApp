import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchFavorites, onCategoryClick } from '../../redux/reducers/userReducer';
import NewsCard from '../newscard/NewsCard';
import pageStyle from './home.module.css';
import Carousel from '../Carousel';

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const data = useSelector((state) => state.userReducer.data);
  const categoriesArray = ["Politics", "Sports", "Education", "Tech", "Business", "Entertainment","Lifestyle","Research","Investigations","Elections","Terrorism","IPL","Pharmacy Industry", "Careers","Movies","Music"];
  
  useEffect(() => {
    dispatch(fetchData('world'));
    dispatch(fetchFavorites());
  },[]);

  return (
    <>
    {loading? <h1> Data is loading..... </h1> :
    <div>
      <div className={pageStyle.categories}>
          {categoriesArray.map((obj, index) => 
            <span className='categoryItem' key={index} onClick={() => dispatch(onCategoryClick(obj))} id={`${obj}`}> {obj} </span>
          )}
      </div>
      <Carousel data={data}/>
      <div className={pageStyle.container}>{
        data.map((news, index) => 
          (
            <div key={index}>
              {news.urlToImage? <NewsCard news={news} key={index} />:null}
            </div>
          )
        )
      }
      </div> 
    </div>
    }
    </>
  )
}

export default Home;
// Active link style, 