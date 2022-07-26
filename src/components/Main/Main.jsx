import {
   Container,
   SimpleGrid,
   Image,
   Flex,
   Heading,
   Text,
   Stack,
   StackDivider,
   Icon,
   useColorModeValue,
} from '@chakra-ui/react';
import { SiGoogleanalytics, SiBitcoin } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs';

import Banner from './../../assets/banner.jpg';

const Feature = ({ text, icon, iconBg }) => {
   return (
      <Stack direction={'row'} align={'center'}>
         <Flex
            w={8}
            h={8}
            align={'center'}
            justify={'center'}
            rounded={'full'}
            bg={iconBg}
         >
            {icon}
         </Flex>
         <Text fontSize={'1rem'} fontWeight={600}>
            {text}
         </Text>
      </Stack>
   );
};

export const Main = () => {
   return (
      <Container maxW={'5xl'} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
               <Text
                  textTransform={'uppercase'}
                  color={'orange.400'}
                  fontWeight={600}
                  fontSize={'sm'}
                  bg={useColorModeValue('orange.50', 'orange.900')}
                  p={2}
                  alignSelf={'flex-start'}
                  rounded={'md'}
               >
                  Our Story
               </Text>
               <Heading>App FiqLimp design agency</Heading>
               <Text color={'gray.500'} fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
               </Text>
               <Stack
                  spacing={4}
                  divider={
                     <StackDivider
                        borderColor={useColorModeValue('gray.100', 'gray.700')}
                     />
                  }
               >
                  <Feature
                     icon={
                        <Icon
                           as={SiGoogleanalytics}
                           color={'yellow.500'}
                           w={5}
                           h={5}
                        />
                     }
                     iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                     text={'Business Planning'}
                  />
                  <Feature
                     icon={
                        <Icon as={SiBitcoin} color={'green.500'} w={5} h={5} />
                     }
                     iconBg={useColorModeValue('green.100', 'green.900')}
                     text={'Financial Planning'}
                  />
                  <Feature
                     icon={
                        <Icon as={BsSearch} color={'purple.500'} w={5} h={5} />
                     }
                     iconBg={useColorModeValue('purple.100', 'purple.900')}
                     text={'Market Analysis'}
                  />
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
