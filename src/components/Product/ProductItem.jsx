import { Tr, Td } from '@chakra-ui/react';
import { products } from './../../data/product_mock.js';

export const getProductItem = () => {
   const productListItem = props => (
      <ProductItem key={props.id} name={props.name} price={props.price} />
   );
   return products.map(productListItem);
};

const ProductItem = ({ name, price }) => {
   return (
      <section>
         <Tr>
            <Td>{name}</Td>
            <Td isNumeric>{price}</Td>
         </Tr>
      </section>
   );
};
