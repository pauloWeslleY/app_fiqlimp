import { NavBar } from './../../components/Navigation/NavBar';
import { Footer } from './../../components/Footer/Footer';
import { ContentAbout } from '../../components/Content/Content';
import { AboutServices } from './../../components/About/AboutServices';

const About = () => {
   return (
      <>
         <NavBar />

         <ContentAbout />
         <AboutServices />
         <Footer />
      </>
   );
};
export default About;
