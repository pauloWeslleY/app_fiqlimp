import { Container, Box, SimpleGrid, Image, chakra } from '@chakra-ui/react';

import { Image11, Image7 } from './../../data/image_mock';

export const ContentAbout = () => {
   return (
      <section>
         <Container maxW={'5xl'}>
            <Box px={8} py={20} mx="auto">
               <SimpleGrid
                  alignItems="start"
                  columns={{
                     base: 1,
                     md: 2,
                  }}
                  mb={24}
                  spacingY={{
                     base: 10,
                     md: 32,
                  }}
                  spacingX={{
                     base: 10,
                     md: 24,
                  }}
               >
                  <Box>
                     <chakra.h2
                        mb={4}
                        fontSize={{
                           base: '2xl',
                           md: '4xl',
                        }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        textAlign={{
                           base: 'center',
                           md: 'left',
                        }}
                        color="gray.900"
                        _dark={{
                           color: 'gray.400',
                        }}
                        lineHeight={{
                           md: 'shorter',
                        }}
                        textShadow="2px 0 currentcolor"
                     >
                        Clear overview for efficient tracking
                     </chakra.h2>
                     <chakra.p
                        mb={5}
                        textAlign={{
                           base: 'center',
                           sm: 'left',
                        }}
                        color="gray.600"
                        _dark={{
                           color: 'gray.400',
                        }}
                        fontSize={{
                           md: 'lg',
                        }}
                     >
                        Handle your subscriptions and transactions efficiently
                        with the clear overview in Dashboard. Features like the
                        smart search option allow you to quickly find any data
                        you’re looking for.
                     </chakra.p>
                  </Box>
                  <Box w="full" h="full">
                     <Image objectFit="cover" src={Image7} alt="" />
                  </Box>
               </SimpleGrid>
               <SimpleGrid
                  alignItems="center"
                  columns={{
                     base: 1,
                     md: 2,
                  }}
                  flexDirection="column-reverse"
                  mb={24}
                  spacingY={{
                     base: 10,
                     md: 32,
                  }}
                  spacingX={{
                     base: 10,
                     md: 24,
                  }}
               >
                  <Box
                     order={{
                        base: 'initial',
                        md: 2,
                     }}
                  >
                     <chakra.h2
                        mb={4}
                        fontSize={{
                           base: '2xl',
                           md: '4xl',
                        }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        textAlign={{
                           base: 'center',
                           md: 'left',
                        }}
                        color="gray.900"
                        _dark={{
                           color: 'gray.400',
                        }}
                        lineHeight={{
                           md: 'shorter',
                        }}
                     >
                        Decide how you integrate Payments
                     </chakra.h2>
                     <chakra.p
                        mb={5}
                        textAlign={{
                           base: 'center',
                           sm: 'left',
                        }}
                        color="gray.600"
                        _dark={{
                           color: 'gray.400',
                        }}
                        fontSize={{
                           md: 'lg',
                        }}
                     >
                        Love to code? Next to our ready-made and free plugins
                        you can use our expansive yet simple API; decide how you
                        integrate Payments and build advanced and reliable
                        products yourself from scratch.
                     </chakra.p>
                  </Box>
                  <Box w="full" h="full">
                     <Image objectFit="cover" src={Image11} alt="" />
                  </Box>
               </SimpleGrid>
            </Box>
         </Container>
      </section>
   );
};
