import React from 'react';

import { 
    Container,
    Collunm,
    Wrapper,
    FooterSubtitle,
    Copyright,
    InfoText, 
} from './styles';

function Footer() {
  return(
      <Container>
          <Wrapper>
            <Collunm>
                <FooterSubtitle>Sobre</FooterSubtitle>

                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </InfoText>
            </Collunm>

            <Collunm>

                <FooterSubtitle>Contato</FooterSubtitle>

                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </InfoText>
            </Collunm>

            <Collunm>

                <FooterSubtitle>Endereço</FooterSubtitle>

                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </InfoText>

            </Collunm>
          </Wrapper>

            <Copyright>

            </Copyright>
      </Container>
  );
}

export default Footer;