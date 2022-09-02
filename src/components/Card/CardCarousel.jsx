import { Center } from '@chakra-ui/react';
import { Slide, Slider } from './../Slider/index';
import { Card } from './Card';
import { products } from './../../data/product_mock';

export const CardSlider = () => {
   if (products.length === 1) {
      return (
         <Center>
            <Card card={products[0]} />
         </Center>
      );
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
         //[] when window width is >= 300px
         300: {
            slidesPerView: 1,
            navigation: false,
            slidesPerGroup: 1,
         },
         //[] when window width is >= 480px
         800: {},
         //[] when window width is >= 640px
         1200: {},
      },
   };

   return (
      <Slider settings={settings}>
         {products.map(props => (
            <Slide key={props.id}>
               <Card
                  name={props.name}
                  image={props.image}
                  price={props.price}
               />
            </Slide>
         ))}
      </Slider>
   );
};
