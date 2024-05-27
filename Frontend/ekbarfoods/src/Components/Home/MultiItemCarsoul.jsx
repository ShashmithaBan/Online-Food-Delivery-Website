import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeals } from './topMeal';
import { CarouselItem } from './CarouselItem';
import { CustomNextArrow, CustomPrevArrow } from './Custom/CustomArrow';

export const MultiItemCarsoul = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:2000,
    prevArrow: <CustomPrevArrow />, // Use custom left arrow
    nextArrow: <CustomNextArrow /> 
  };
  return (
    <div>
        <Slider {...settings}>
            {topMeals.map((item)=>(
                <CarouselItem image ={item.image} title = {item.title}/>
            ))}
        </Slider>
    </div>
  );
};
