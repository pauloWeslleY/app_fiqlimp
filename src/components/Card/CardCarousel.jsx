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
