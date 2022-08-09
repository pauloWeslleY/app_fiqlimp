import { useColorModeValue } from '@chakra-ui/react';

export const useColor = () => {
   const bg = useColorModeValue('white', 'gray.800');
   // * Background NavBar Components
   const background__navbar = useColorModeValue('gray.100', 'gray.900');

   // * Colors Main Components
   const bg__text_main = useColorModeValue('orange.50', 'orange.900');
   const border__color_main = useColorModeValue('gray.100', 'gray.700');
   const bg__icon_main_business = useColorModeValue('yellow.100', 'yellow.900');
   const bg__icon_main_financial = useColorModeValue('green.100', 'green.900');
   const bg__icon_main_search = useColorModeValue('purple.100', 'purple.900');

   // * Background Footer Components
   const background__footer = useColorModeValue('gray.100', 'gray.900');
   const bg__color_footer = useColorModeValue('gray.700', 'gray.200');
   const border__color_footer = useColorModeValue('gray.200', 'gray.700');

   // * Footer Icons
   const background_footer_button_hover = useColorModeValue(
      'blackAlpha.200',
      'whiteAlpha.200'
   );
   const background_footer_button = useColorModeValue(
      'blackAlpha.100',
      'whiteAlpha.100'
   );

   return {
      bg,
      background_footer_button,
      background_footer_button_hover,
      background__footer,
      bg__color_footer,
      border__color_footer,
      background__navbar,
      bg__text_main,
      border__color_main,
      bg__icon_main_business,
      bg__icon_main_financial,
      bg__icon_main_search,
   };
};
