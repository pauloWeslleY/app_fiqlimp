import {
   chakra,
   Container,
   TableContainer,
   Table,
   TableCaption,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Td,
   Th,
} from '@chakra-ui/react';

export const ProductList = () => {
   return (
      <>
         <Container maxW={'5xl'}>
            <chakra.h1
               textAlign={'center'}
               fontSize={'2rem'}
               py={'2rem'}
               fontWeight={'semibold'}
            >
               Top Selling Products
            </chakra.h1>
            <TableContainer>
               <Table variant="simple" colorScheme="orange">
                  <TableCaption>
                     Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                     <Tr>
                        <Th>Products</Th>
                        <Th isNumeric>Price</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td>Lava Bus Wood Base</Td>
                        <Td isNumeric>6.50</Td>
                     </Tr>
                     <Tr>
                        <Td>Gary Plus Broom</Td>
                        <Td isNumeric>8.55</Td>
                     </Tr>
                     <Tr>
                        <Td>Sanfonado Sink Plunger</Td>
                        <Td isNumeric>5.50</Td>
                     </Tr>
                  </Tbody>
                  <Tfoot>
                     <Tr>
                        <Th>Products</Th>
                        <Th isNumeric>Price</Th>
                     </Tr>
                  </Tfoot>
               </Table>
            </TableContainer>
         </Container>
      </>
   );
};
