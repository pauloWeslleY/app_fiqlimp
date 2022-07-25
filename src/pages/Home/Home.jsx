import { Navigation } from './../../components/Navigation/Nagivation';
import { NavBar } from './../../components/Navigation/NavBar';
import { Hero } from '../../components/Hero/Hero';

import styles from './home.module.scss';

const Home = () => {
   return (
      <main className={styles.main__home}>
         <NavBar />
         <Navigation />
         <h1>Home</h1>
         <Hero />
      </main>
   );
};

export default Home;
