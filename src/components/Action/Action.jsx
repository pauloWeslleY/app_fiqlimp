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
                  <chakra.span display={'block'}>
                     Are you looking for cleaning products?
                  </chakra.span>
                  <chakra.span
                     display={'block'}
                     color={'gray.500'}
                     _dark={{
                        color: 'orange.400',
                     }}
                  >
                     You can find it here in the Fiq Limp app.
                  </chakra.span>
               </chakra.span>
            </Box>
         </Flex>
      </Flex>
   );
};
