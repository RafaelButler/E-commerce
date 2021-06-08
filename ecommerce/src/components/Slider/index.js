import React from 'react';
import chair from '../../image/chair.png';
import { Container, Wrapper, Image, SlideTitle, LeftSlide, Button, WrapperButton, ContrastTitle } from './styles';

function SectionSlider() {
  return(
      <Container>
          <Wrapper>
              <LeftSlide>

                <SlideTitle>Modelos que <ContrastTitle>combinam</ContrastTitle> <br /> com você</SlideTitle>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry<br />
                    text ever since the 1500s, when an unknown printer.Software like Aldus PageMaker<br /> including versions of Lorem Ipsum.
                </p>
                
                <WrapperButton>
                    <Button>Ver item</Button>
                </WrapperButton>

              </LeftSlide>
            <Image src={chair} alt="chair"/>
          </Wrapper>
      </Container>
  );
}

export default SectionSlider;