import React, { useContext } from 'react';
import Carrocel from '../../components/Carrocel';
import SectionSlider from '../../components/Slider';

import { Container, CaroucelSection } from './styles';

import Slider from "react-slick";
import '../../styles/slick.css';

import { ProdutoContext } from '../../context/produtoContext';

export function Home() {

  const {info} = useContext(ProdutoContext);
   
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return(
    <Container>
      <SectionSlider />

      <CaroucelSection>
        <Slider {...settings}>
          {info.map(caroucel => (

            <Carrocel 
              img={caroucel.img} 
              oldPrice={caroucel.oldPrice} 
              newPrice={caroucel.newPrice} 
              partPrice={caroucel.partPrice}
              description={caroucel.description}
              key={caroucel.id}  
            />

          ))}
          
        </Slider>
        
      </CaroucelSection>
      
    </Container>
  );
};


