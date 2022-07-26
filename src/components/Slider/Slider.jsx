//* Import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper } from 'swiper/react';
//* Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss';

export const Slider = ({ settings, children }) => {
   return (
      <section>
         <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
         </Swiper>
      </section>
   );
};
