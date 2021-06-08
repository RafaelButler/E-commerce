import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProdutoContext } from '../../context/produtoContext';

import { 
  Container,
  Wrapper,
  ListaMenu,
  MenuLink,
  Logo,
  LogoContrast,
  Cart 
} from './styles';

function Header() {

  const {quatity} = useContext(ProdutoContext);

  return(
    <Container>
      <Wrapper>
          <Logo>Furni<LogoContrast>ture</LogoContrast></Logo>

          <nav>
              <ListaMenu>
                  <MenuLink to="/" >Home</MenuLink>
                  <MenuLink to="/" >Sobre</MenuLink>
                  <MenuLink to="/contact">Contato</MenuLink>

                  <Link to="/cart">
                    <Cart />
                  </Link>
                  <span>{quatity}</span>
              </ListaMenu>
          </nav>
      </Wrapper>
    </Container>
  );
}

export default Header;