import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { NavBar } from './../../components/Navigation/NavBar';
import { CardSlider } from './../../components/Card/CardCarousel';
import { ProductList } from './../../components/Product/ProductList';
import { StatsDescription } from './../../components/Statics/Statics';
import { Footer } from './../../components/Footer/Footer';
import { HeroProduct } from './../../components/Hero/HeroProduct';

import styles from './styles.module.scss';

const Product = () => {
   return (
      <section>
         <NavBar />
         <HeroProduct />
         <Box align={'center'}>
            <Heading
               fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
               py={'2rem'}
            >
               <div className={styles.line__section}></div>
               <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                     content: "''",
                     width: 'full',
                     height: useBreakpointValue({ base: '20%', md: '30%' }),
                     position: 'absolute',
                     bottom: 1,
                     left: 0,
                     bg: 'orange.400',
                     zIndex: -1,
                  }}
               >
                  Our Product
               </Text>
            </Heading>
         </Box>
         <CardSlider />
         <ProductList />
         <StatsDescription />
         <Footer />
      </section>
   );
};

export default Product;
