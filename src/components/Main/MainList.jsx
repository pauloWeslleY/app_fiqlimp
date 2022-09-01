import { Stack, Flex, Text, Icon } from '@chakra-ui/react';
import { SiGoogleanalytics, SiBitcoin } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs';
import { useColor } from './../../hooks/useColor';

export const Feature = ({ text, icon, iconBg }) => {
   return (
      <Stack direction={'row'} align={'center'} py={'0.3rem'}>
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

export const MainList = () => {
   const {
      bg__icon_main_business,
      bg__icon_main_financial,
      bg__icon_main_search,
   } = useColor();

   const feature__list = [
      {
         id: 1,
         icon: SiGoogleanalytics,
         icon__bg: bg__icon_main_business,
         colors: 'yellow.500',
         text: 'Better Quality',
      },
      {
         id: 2,
         icon: SiBitcoin,
         icon__bg: bg__icon_main_financial,
         colors: 'grenn.500',
         text: 'Best Price',
      },
      {
         id: 3,
         icon: BsSearch,
         icon__bg: bg__icon_main_search,
         colors: 'purple.500',
         text: 'Market Analysis',
      },
   ];

   const getList = () => {
      const getFeature = props => (
         <Feature
            icon={<Icon as={props.icon} color={props.colors} w={5} h={5} />}
            iconBg={props.icon__bg}
            text={props.text}
         />
      );
      return feature__list.map(getFeature);
   };

   return <>{getList()}</>;
};
