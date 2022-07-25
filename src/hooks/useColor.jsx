import { useColorModeValue } from '@chakra-ui/react';

export const useColor = () => {
   const bg = useColorModeValue('white', 'gray.800');

   return { bg };
};
