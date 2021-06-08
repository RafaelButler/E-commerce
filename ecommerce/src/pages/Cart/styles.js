import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const SectionCart = styled.div`
    display: flex;
    height: 500px;
    align-items: center;
   justify-content: center;
`;

export const CartTitle = styled.h1`
    text-align: center;
    margin-top: 40px;
    font-size: 40px;
    font-weight: 400;
`;

export const LeftSideCart = styled.div`
    width: 41%;
    margin: 30px;
`;

export const RightSideCart = styled.div`
    height: 265px;
    width: 300px;
    background: var(--secondary);
    padding: 20px;
    margin: 30px;
`;

export const ProductInfoCart = styled.ul`
    border-bottom: 1px solid;
    width: 100%;

    li{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 10px;
    }
`;

export const InfosBoxes = styled.p`
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 18px;

    span{
        font-weight: 400;
    }
`;


export const DescriptionRadio = styled.span`
    margin-left: 10px;
`;

export const FinalizarBotao = styled.button`
   width: 100%;
    padding: 7px;
    color: #fff;
    background: var(--primary);
    border: 1px solid var(--primary);
    font-weight: bold;
    font-size: 17px;
    margin-top: 25px;
    cursor: pointer;
`;


export const Image = styled.img`
    width: 40px;
`;

export const MessageEmpty = styled.p`
    background: var(--primary);
    color: #fff;
    padding: 20px;
`;

export const MessageEndBuy = styled.p`
    margin-top: 55px;
    background: #000;
    color: #fff;
    padding: 6px 10px;
`;
