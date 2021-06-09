import { motion } from 'framer-motion';
import React, { useContext }  from 'react';
import { ProdutoContext } from '../../context/produtoContext';
import { Container, Cart } from './styles';

function IconSide() {

  const {quatity} = useContext(ProdutoContext);
  
  return(
      <Container to="/cart">
          <span>Compre</span>
          <motion.span
            transition={{ yoyo: Infinity, duration: 0.3 }}
            animate={{ y: ['20%', '-20%']}}
          >
            <Cart />
            <span style={{ fontSize: '10px', position: 'absolute' }}>{quatity}</span>
          </motion.span>
      </Container>
  );
}

export default IconSide;