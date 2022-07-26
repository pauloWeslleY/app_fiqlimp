import {
   Box,
   Flex,
   Stack,
   HStack,
   IconButton,
   useDisclosure,
   useColorModeValue,
   chakra,
} from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link as NavItem } from 'react-router-dom';
import { ColorModeSwitcher } from './../BtnModeColor/ColorModeSwitcher';
import { nav_link_props } from './../../data/NavLink';
//* Styles
import styles from './styles.module.scss';

const NavLink = ({ children, path }) => (
   <NavItem to={`/${path}`}>
      <button className={styles.nav_link}>{children}</button>
   </NavItem>
);

export const NavBar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   const navItem = () => {
      return nav_link_props.map(link => (
         <NavLink key={link.id} path={link.path}>
            {link.name}
         </NavLink>
      ));
   };

   return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
               size={'md'}
               icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
               aria-label={'Open Menu'}
               display={{ sm: 'flex', md: 'none' }}
               onClick={isOpen ? onClose : onOpen}
               justifyContent={'center'}
               bg={'transparent'}
            />
            <HStack spacing={8}>
               <Box>
                  <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                     App FiqLimp
                  </chakra.h1>
               </Box>
               <HStack
                  as={'nav'}
                  spacing={4}
                  display={{ base: 'none', md: 'flex' }}
               >
                  {navItem()}
               </HStack>
            </HStack>
            <HStack align={'flex-end'}>
               <ColorModeSwitcher />
            </HStack>
         </Flex>

         {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
               <Stack as={'nav'} spacing={4}>
                  {navItem()}
               </Stack>
            </Box>
         ) : null}
      </Box>
   );
};
