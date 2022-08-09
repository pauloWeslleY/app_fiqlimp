import { Flex, Box, chakra } from '@chakra-ui/react';

export const Action = () => {
   return (
      <Flex w={'full'} alignItems={'center'} justifyContent={'center'}>
         <Flex
            justify={'center'}
            bg={'orange.100'}
            _dark={{
               bg: 'gray.900',
            }}
            w={'full'}
         >
            <Box
               w={{
                  base: 'full',
                  md: '75%',
                  lg: '50%',
               }}
               px={4}
               py={20}
               textAlign={{
                  base: 'left',
                  md: 'center',
               }}
            >
               <chakra.span
                  fontSize={{
                     base: '3xl',
                     sm: '4xl',
                  }}
                  fontWeight={'extrabold'}
                  letterSpacing={'tight'}
                  lineHeight={'shorter'}
                  color={'gray.900'}
                  _dark={{
                     color: 'gray.100',
                  }}
                  mb={6}
               >
                  <chakra.span display={'block'}>Ready to dive in?</chakra.span>
                  <chakra.span
                     display={'block'}
                     color={'gray.500'}
                     _dark={{
                        color: 'orange.400',
                     }}
                  >
                     Start your free trial today.
                  </chakra.span>
               </chakra.span>
            </Box>
         </Flex>
      </Flex>
   );
};
