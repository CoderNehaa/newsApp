import React from 'react';
import styled from 'styled-components';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const Div = styled.div`
  display: flex;
  align-items: end;
  justify-content: start;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 400px) {
    height: 300px;
  }
`;

const Span = styled.span`
  font-size: 60px;
  padding: 0px 5px;
  margin: 2px 2px 15px 15px;
  color: white;
  text-align: center;
  z-index: 999;
  opacity: 0.8;
  background-color: black;
  
  @media (max-width: 400px) {
    font-size:20px;
  }
`;

const Carousel = ({ data }) => {
  function handleClick(url) {
    window.open(url, '_blank');
  }

  const slideProperties = {
    duration: 3000,
    transitionDuration: 500,
  };

  return (
    <div>
      <Slide {...slideProperties}>
        {data.map((news, index) => {
          if (news.urlToImage) {
            return (
              <div key={index} onClick={() => handleClick(news.url)}>
                <Div style={{ backgroundImage: `url(${news.urlToImage})` }}>
                  <Span>{news.title}</Span>
                </Div>
              </div>
            );
          }
        })}
      </Slide>
    </div>
  );
};

export default Carousel;
