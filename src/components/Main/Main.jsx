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
export const Main = () => {
   const { bg__text_main } = useColor();

   return (
      <Container maxW={'5xl'} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
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
               <Heading>App FiqLimp design</Heading>
               <Text color={'gray.500'} fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
               </Text>
               <Stack spacing={4}>
                  <MainList />
               </Stack>
            </Stack>
            <Flex>
               <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={Banner}
                  objectFit={'cover'}
               />
            </Flex>
         </SimpleGrid>
      </Container>
   );
};
