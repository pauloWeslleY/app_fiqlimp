import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { NavBar } from './../../components/Navigation/NavBar';
import { Carousel } from '../../components/Carousel/Carousel';
import { CardCarousel } from './../../components/Card/CardCarousel';
import { ProductList } from './../../components/Product/ProductList';
import { StatsDescription } from './../../components/Statics/Statics';
import { Footer } from './../../components/Footer/Footer';

const Product = () => {
   return (
      <section>
         <NavBar />
         <Carousel />
         <Box align={'center'}>
            <Heading
               fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
               py={'2rem'}
            >
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
         <CardCarousel />
         <ProductList />
         <StatsDescription />
         <Footer />
      </section>
   );
};

export default Product;
