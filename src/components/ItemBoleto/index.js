import React from 'react';

import { Container, DateBoleto, Frases, ProductName, ProductValue } from './styles';

const ItemBoleto = ({nameProduct, valueProduct, boletoDate}) => {
  return <Container>
      <Frases>
        <ProductName style={{fontWeight: 'bold'}}>{nameProduct}</ProductName>
        <DateBoleto>Vence em: <DateBoleto style={{fontWeight: 'bold'}}>{boletoDate}</DateBoleto></DateBoleto>
      </Frases>
      
      <ProductValue>R$ <ProductValue style={{fontWeight: 'bold'}}>{valueProduct}</ProductValue> </ProductValue>
  </Container>;
}

export default ItemBoleto;