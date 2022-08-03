import {
   Container,
   SimpleGrid,
   Flex,
   Box,
   Heading,
   List,
   Image,
   Button,
} from '@chakra-ui/react';
import { SiWhatsapp } from 'react-icons/si';
import { NavBar } from './../../components/Navigation/NavBar';
import { Footer } from './../../components/Footer/Footer';
import { ContactListItem } from './ContactList';

import { Image10 } from './../../data/image_mock';

import styles from './styles.module.scss';

const Contact = () => {
   return (
      <section>
         <NavBar />

         <Container maxW={'5xl'}>
            <SimpleGrid minChildWidth={'120px'} spacing={'40px'} py={'2rem'}>
               <Flex
                  justifyContent={'center'}
                  flexDirection={'column'}
                  height={'70vh'}
               >
                  <Heading
                     fontWeight={600}
                     fontSize={{ base: '3xl', sm: '4xl', md: '3.4rem' }}
                     pb={'5rem'}
                  >
                     Entre em contato com a gente!
                  </Heading>
                  <Box className={styles.hero__contact}>
                     <List spacing={'2rem'}>{ContactListItem()}</List>
                  </Box>
                  <Box py={'2rem'}>
                     <Button
                        leftIcon={<SiWhatsapp />}
                        colorScheme="teal"
                        variant="solid"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        borderRadius="0.9rem"
                        fontSize="1.2rem"
                        fontWeight="semibold"
                        _hover={{ bg: '#ebedf0' }}
                        _active={{
                           bg: '#dddfe2',
                           transform: 'scale(0.98)',
                           borderColor: '#bec3c9',
                        }}
                     >
                        WhatsApp
                     </Button>
                  </Box>
               </Flex>
               <Flex justifyContent={'center'}>
                  <Image
                     src={Image10}
                     alt=""
                     objectFit={'cover'}
                     borderRadius={'3rem'}
                  />
               </Flex>
            </SimpleGrid>
         </Container>

         <Footer />
      </section>
   );
};
export default Contact;
