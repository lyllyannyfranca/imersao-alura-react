import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
  .slick-slider {
      display: flex;
  }
  .slick-slide {
      flex: 1 1 0px;
      transition: 300ms ease 100ms;
  }
  .slick-slide:after {
      content: "";
      display: block;
  }
  .slick-slider:hover .slick-slide {
      transform: translateX(-5%);
  }
  .slick-slide:hover ~ .slick-slide {
      transform: translateX(5%);
  }
  .slick-slider .slick-slide:hover {
      transform: scale(1.2);
  }

`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
    }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      draggable: true,
      useTransform: true,
      slidesToScroll: 1,
      slidesToShow: 4
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 