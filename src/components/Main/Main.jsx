import {
   Container,
   SimpleGrid,
   Image,
   Flex,
   Heading,
   Text,
   Stack,
} from '@chakra-ui/react';

import { Banner } from './../../data/image_mock';
import { useColor } from './../../hooks/useColor';
import { MainList } from './MainList';
import { settings } from './../../hooks/useReveal';
import Fade from 'react-reveal/Fade';

export const Main = () => {
   const { bg__text_main } = useColor();
   const { settings_reveal } = settings();

   return (
      <Container maxW={'5xl'} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Fade left cascade {...settings_reveal}>
               <Stack spacing={4}>
                  <Text
                     textTransform={'uppercase'}
                     color={'orange.400'}
                     fontWeight={600}
                     fontSize={'sm'}
                     bg={bg__text_main}
                     p={2}
                     alignSelf={'flex-start'}
                     rounded={'md'}
                  >
                     Our Story
                  </Text>
                  <Heading>Quality products at the best price</Heading>
                  <Text color={'gray.500'} fontSize={'lg'}>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Stack spacing={4}>
                     <MainList />
                  </Stack>
               </Stack>
            </Fade>
            <Fade right cascade {...settings_reveal}>
               <Flex>
                  <Image
                     rounded={'md'}
                     alt={'feature image'}
                     src={Banner}
                     objectFit={'cover'}
                  />
               </Flex>
            </Fade>
         </SimpleGrid>
      </Container>
   );
};
