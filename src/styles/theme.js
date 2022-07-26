import { extendTheme } from "@chakra-ui/react";

//* Include custom option in here
const customTheme = {};

const theme = extendTheme({
   customTheme,
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