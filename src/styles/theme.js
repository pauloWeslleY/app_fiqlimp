import { extendTheme } from "@chakra-ui/react";

const configTheme = {
   initialColorMode: 'light',
   useSystemColorMode: false,
}

//* Include custom option in here
const customTheme = {};

const theme = extendTheme({
   customTheme,
   configTheme,
   styles: {
      global: {
         body: {
            // fontSize: '62.5%',
            boxSizing: 'border-box',
         },
      }
   },
   fonts: {
      heading: 'Roboto',
      body: 'Roboto'
   },
});

export default theme;