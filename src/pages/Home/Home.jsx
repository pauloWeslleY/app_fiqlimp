import { NavBar } from './../../components/Navigation/NavBar';
import { Hero } from './../../components/Hero/Hero';
import { Action } from './../../components/Action/Action';
import { Main } from './../../components/Main/Main';
import { Footer } from './../../components/Footer/Footer';

import styles from './home.module.scss';

const Home = () => {
   return (
      <main className={styles.main__home}>
         <NavBar />
         <Hero />
         <Action />
         <Main />
         <Footer />
      </main>
   );
};

export default Home;
