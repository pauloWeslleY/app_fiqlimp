import {
   Flex,
   Heading,
   Image,
   Stack,
   Text,
   useBreakpointValue,
} from '@chakra-ui/react';
import { Image4 } from '../../data/image_mock';

export const HeroProduct = () => {
   return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
         <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
               <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
                     App FiqLimp
                  </Text>
                  <br />{' '}
                  <Text color={'orange.400'} as={'span'}>
                     Product in All
                  </Text>{' '}
               </Heading>
               <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                  The project board is an exclusive resource for contract work.
                  It's perfect for freelancers, agencies, and moonlighters.
               </Text>
            </Stack>
         </Flex>
         <Flex flex={1}>
            <Image alt={'Login Image'} objectFit={'cover'} src={Image4} />
         </Flex>
      </Stack>
   );
};
