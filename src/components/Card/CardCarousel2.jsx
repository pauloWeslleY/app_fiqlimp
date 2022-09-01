import { Slide, Slider } from '../Slider/index';
import { Card } from './Card';
import { products } from '../../data/product_mock';

export const CardCarousel = () => {
   // const cards = products.length < 3 ? products.length : 3;

   if (products.length === 1) {
      return <Card />;
   }

   const settings = {
      spaceBetween: 50,
      navigation: products.length >= 3,
      pagination: products.length >= 3 && {
         clickable: true,
      },
      draggable: products.length >= 3,
      loop: products.length >= 3,
      //! Responsive breakpoints
      breakpoints: {
         //[] when window width is >= 320px
         300: {
            slidesPerView: 1,
            navigation: false,
            slidesPerGroup: 1,
         },
         //[] when window width is >= 480px
         800: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         //[] when window width is >= 640px
         1200: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
      },
   };

   return (
      <Slider settings={settings}>
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
