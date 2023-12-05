import React from 'react';

import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const divStyle = {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:"500px",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  cursor:"pointer"
}

const spanStyle = {
  fontSize: "20px",
  background: "#efefef",
  color: "#000000",
}

const Carousel = ({data}) => {
  function handleClick(url){
    window.location.href = url;
  }

 return (
    <div>
      <Slide>
        {data.map((news, index) => {
          if(news.urlToImage){
            return (
              <div key={index} onClick={() => handleClick(news.url)}>
                <div style={{...divStyle, backgroundImage:`url(${news.urlToImage})`}}>
                  <span style={spanStyle}> {news.title} </span>
                </div>
              </div>
            )
          }
        })}
      </Slide>
    </div>
  )
}

export default Carousel;
// Clicking will go to article page
