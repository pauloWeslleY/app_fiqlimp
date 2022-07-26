import { Flex, Container, Heading, Stack, Text, Image } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';
import { Banner2 } from './../../data/image_mock';
import { settings } from '../../hooks/useReveal';
import styles from './styles.module.scss';

export const Hero = () => {
   const { settings_reveal } = settings();
   return (
      <section className={styles.section__hero}>
         <Container maxW={'5xl'}>
            <Stack
               textAlign={'center'}
               align={'center'}
               spacing={{ base: 8, md: 10 }}
               py={{ base: 20, md: 25 }}
            >
               <Zoom top cascade {...settings_reveal}>
                  <Heading
                     fontWeight={600}
                     fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                     lineHeight={'110%'}
                  >
                     Meeting scheduling{' '}
                     <Text as={'span'} color={'orange.400'}>
                        made easy
                     </Text>
                  </Heading>
                  <Text fontSize={'1rem'} color={'gray.500'} maxW={'3xl'}>
                     Never miss a meeting. Never be late for one too. Keep track
                     of your meetings and receive smart reminders in appropriate
                     times. Read your smart “Daily Agenda” every morning.
                  </Text>
               </Zoom>
               <Zoom bottom cascade {...settings_reveal}>
                  <Flex alignItems={'center'}>
                     <Image
                        align={'center'}
                        w={400}
                        objectFit="cover"
                        src={Banner2}
                        alt="Banner do Site"
                     />
                  </Flex>
               </Zoom>
            </Stack>
         </Container>
      </section>
   );
};
