import { Flex, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { IlustratorSvg } from './HeroSvg.jsx';
import styles from './styles.module.scss';

export const Hero = () => {
   return (
      <section className={styles.section__hero}>
         <Container maxW={'5xl'}>
            <Stack
               textAlign={'center'}
               align={'center'}
               spacing={{ base: 8, md: 10 }}
               py={{ base: 20, md: 25 }}
            >
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
               <Text color={'gray.500'} maxW={'3xl'}>
                  Never miss a meeting. Never be late for one too. Keep track of
                  your meetings and receive smart reminders in appropriate
                  times. Read your smart “Daily Agenda” every morning.
               </Text>
               <Flex w={'full'}>
                  <IlustratorSvg
                     height={{ sm: '24rem', lg: '28rem' }}
                     mt={{ base: 12, sm: 16 }}
                  />
               </Flex>
            </Stack>
         </Container>
      </section>
   );
};
