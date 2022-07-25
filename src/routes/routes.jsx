import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home/Home';
import Product from './../pages/Product/Product';
import Services from './../pages/Services/Services';
import About from './../pages/About/About';
import Contact from './../pages/Contact/Contact';

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRoutes;
