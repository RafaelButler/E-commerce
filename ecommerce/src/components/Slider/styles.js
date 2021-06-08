import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Section } from '../../styles/GlobalStyles';
import {LogoContrast} from '../Header/styles';

export const Container = styled(Section)`
    height: 700px;
    background: var(--secondary);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
`;

export const Image = styled.img`
    width: auto;
    height: 450px;
`;

export const SlideTitle = styled(motion.h1)`
    font-size: 50px;
    font-weight: 300;
    text-align: left;
    font-style: italic;
    line-height: 1.3;
    margin-right: 35px;
`;

export const ContrastTitle = styled(LogoContrast)`

`;

export const LeftSlide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        text-align: left;
        margin-top: 10px;
        color: #222;
        opacity: 0.8;
    }
`;

export const Button = styled.button`
    padding: 10px 35px;
    background: var(--primary);
    color: #fff;
    border: 1px solid;
    font-size: 15px;
    cursor: pointer;

    &:hover{
        transition: all 0.2;
    }
`;


export const WrapperButton = styled.div`
    width: 100%;
    text-align: left;
    margin-top: 13px;
`;