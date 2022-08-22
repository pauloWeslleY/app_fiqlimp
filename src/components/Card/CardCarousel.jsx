import { Slide, Slider } from './../Slider/index';
import { Card } from './Card';
import { products } from './../../data/product_mock';

export const CardCarousel = () => {
   const cards = products.length < 3 ? products.length : 3;

   if (products.length === 1) {
      return <Card />;
   }

   const settings_props = {
      spaceBetween: 50,
      slidesPerView: cards,
      navigation: products.length >= 3,
      draggable: products.length >= 3,
      loop: products.length >= 3,
      pagination: {
         clickable: true,
      },
      //! Responsive breakpoints
      breakpoints: {
         //[] when window width is >= 320px
         320: {
            slidesPerView: 1,
            spaceBetween: 10,
         },
         //[] when window width is >= 480px
         480: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         //[] when window width is >= 640px
         640: {
            slidesPerView: cards,
            spaceBetween: 40,
         },
      },
   };

   return (
      <Slider settings={settings_props}>
         {products.map(props => (
            <Slide>
               <Card
                  key={props.id}
                  name={props.name}
                  image={props.image}
                  price={props.price}
               />
            </Slide>
         ))}
      </Slider>
   );
};
