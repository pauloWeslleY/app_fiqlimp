import {
   Flex,
   Box,
   HStack,
   VStack,
   IconButton,
   CloseButton,
   chakra,
   useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ColorModeSwitcher } from './../BtnModeColor/ColorModeSwitcher';
import { getNavLink } from './NavLink.jsx';
import { useColor } from './../../hooks/useColor.jsx';

export const Navigation = () => {
   const { bg } = useColor();
   const mobileNav = useDisclosure();

   return (
      <chakra.header
         bg={bg}
         w="full"
         px={{
            base: 2,
            sm: 4,
         }}
         py={4}
         shadow="md"
      >
         <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
               <chakra.a
                  href="/"
                  title="Choc Home Page"
                  display="flex"
                  alignItems="center"
               ></chakra.a>
               <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                  App FiqLimp
               </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
               <HStack
                  spacing={1}
                  mr={1}
                  color="brand.500"
                  display={{
                     base: 'none',
                     md: 'inline-flex',
                  }}
               >
                  {getNavLink()}
                  <ColorModeSwitcher />
               </HStack>
               <Box
                  display={{
                     base: 'inline-flex',
                     md: 'none',
                  }}
               >
                  <IconButton
                     display={{
                        base: 'flex',
                        md: 'none',
                     }}
                     aria-label="Open menu"
                     fontSize="20px"
                     color="gray.800"
                     _dark={{
                        color: 'inherit',
                     }}
                     variant="ghost"
                     icon={<AiOutlineMenu />}
                     onClick={mobileNav.onOpen}
                  />
                  <VStack
                     pos="absolute"
                     top={0}
                     left={0}
                     right={0}
                     display={mobileNav.isOpen ? 'flex' : 'none'}
                     flexDirection="column"
                     p={'8.5rem'}
                     bg={'gray.900'}
                     spacing={3}
                     rounded="sm"
                     shadow="sm"
                     h={'100vh'}
                     fontSize={'1.2rem'}
                  >
                     <CloseButton
                        aria-label="Close menu"
                        onClick={mobileNav.onClose}
                     />
                     {getNavLink()}
                  </VStack>
               </Box>
            </HStack>
         </Flex>
      </chakra.header>
   );
};
