import React, { useContext, useState } from 'react';
import { ProdutoContext } from '../../context/produtoContext';

import { Container, Wrapper, OldPrice, NewPrice, Description, Button, Image, PartPrice, Favourite } from './styles';

function Carrocel({ 
    img, 
    oldPrice,
    newPrice,
    partPrice,
    description,
    key ,
}) {

    const {handleInfos} = useContext(ProdutoContext);
    let [counter, setCounter] = useState(0);

    const sumCountter = () => {
        setCounter(counter += 1)
    }

    return(
        <Container key={key}>
            <Wrapper>
                <Image src={img} alt="imagem"/>

                <OldPrice>
                    {oldPrice}
                </OldPrice>

                <NewPrice>
                    {newPrice}
                </NewPrice>

                <PartPrice>
                    {partPrice}
                </PartPrice>
                
                <Description>
                    <p>
                        {description}
                    </p>
                    <Favourite />
                </Description>

                <Button 
                    whileHover={{ scale: 1.1 }}
                    onClick={() =>{ 
                        sumCountter();
                        handleInfos({
                            oldPrice: oldPrice,
                            newPrice: newPrice,
                            partPrice: partPrice,
                            description: description,
                            img: img,
                            counter: counter 
                        });
                }}>
                    Comprar
                </Button>
            </Wrapper>
        </Container>
    );
}

export default Carrocel;