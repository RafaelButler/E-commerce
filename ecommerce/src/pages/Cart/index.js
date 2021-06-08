import React, { useContext, useState } from 'react';
import { ProdutoContext } from '../../context/produtoContext';

import { 
    Container,
    CartTitle,
    LeftSideCart,
    RightSideCart,
    ProductInfoCart,
    SectionCart,
    InfosBoxes,
    DescriptionRadio,
    FinalizarBotao,
    Image,
    MessageEmpty,
    MessageEndBuy
} from './styles';

function Cart() {

    const { products } = useContext(ProdutoContext);
    const [messageEnd, setmessageEnd] = useState(false);

  return(
        <Container>
            <CartTitle>Cart</CartTitle>
            <SectionCart>
                <LeftSideCart>
                    {products.length === 0  ? (
                        <>
                            <MessageEmpty>Não existem itens no carrinho</MessageEmpty>
                        </>
                    ) : (
                        <>
                        {products.map(singleProduct => (
                            <ProductInfoCart key={singleProduct.id}>
                                <li>
                                    <span>x</span>
                                    <Image src={singleProduct.img} alt="imagem"/>
                                    <span>{singleProduct.newPrice}</span>
                                    <span>{singleProduct.counter}</span>
                                </li>
                            </ProductInfoCart>
                        ))}
                        </>
                    )}
                </LeftSideCart>
                
                <RightSideCart>
                    <InfosBoxes>Subtotal <span>R$ 220,00 </span></InfosBoxes>

                    <InfosBoxes>
                        Subtotal 

                        <span>
                            <input type="radio" placeholder="asd"/><DescriptionRadio>Frete Grátis</DescriptionRadio><br />
                        </span>

                    </InfosBoxes>

                    <InfosBoxes>Total <span> R$ 220,00</span></InfosBoxes>

                    {products.length === 0  ? (
                        <>
                            <FinalizarBotao disabled style={{ opacity: 0.8, cursor: 'not-allowed'}}>Finalizar</FinalizarBotao>
                        </>
                    ) : (
                        <>
                            <FinalizarBotao onClick={() => setmessageEnd(true)}>Finalizar</FinalizarBotao>
                        </>
                    )}
                    
                    
                    {messageEnd ? (
                        <>
                            <MessageEndBuy>Compra Finalizada</MessageEndBuy>
                        </>
                    ) : ''}
                </RightSideCart>

            </SectionCart>
        </Container>
    );
}

export default Cart;