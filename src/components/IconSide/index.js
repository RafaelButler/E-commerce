import React, { useContext }  from 'react';
import { ProdutoContext } from '../../context/produtoContext';
import { Container, Cart } from './styles';

function IconSide() {

  const {quatity} = useContext(ProdutoContext);
  
  return(
      <Container to="/cart">
          <span>Compre</span>
          <Cart />
          <span>{quatity}</span>
      </Container>
  );
}

export default IconSide;