import { motion } from 'framer-motion';
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
            <CartTitle>Carrinho</CartTitle>
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
                    <InfosBoxes
                    >
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Subtotal 
                        </motion.div>
                        
                        <span>R$ 220,00 </span>
                    </InfosBoxes>

                    <InfosBoxes>

                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                        Entrega 
                        </motion.div>

                        <span>
                            <input type="radio" placeholder="asd"/><DescriptionRadio>Frete Grátis</DescriptionRadio><br />
                        </span>

                    </InfosBoxes>

                    <InfosBoxes>
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                        Total
                        </motion.div>
                        
                        <span> R$ 220,00</span>
                    </InfosBoxes>

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