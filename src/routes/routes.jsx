import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home/Home';

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRoutes;
