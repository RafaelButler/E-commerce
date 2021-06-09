import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
    display: flex;
    width: 247px;
    flex-direction: column;
    justify-content: center;
`;

export const OldPrice = styled.span`
    text-align: left;
    font-size: 15px;
    text-decoration: line-through;
    color: var(--primary);
    margin-top: 7px;
    margin-bottom: 4px;
`;

export const NewPrice = styled.span`
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    margin-top: 7px;
    margin-bottom: 4px;
`;

export const Description = styled.div`
    margin-top: 7px;
    text-align: justify;
    margin-bottom: 7px;
`;

export const Button = styled(motion.button)`
    padding: 10px 35px;
    background: var(--primary);
    color: #fff;
    border: 1px solid;
    font-size: 15px;
    cursor: pointer;
    margin-top: 7px;
    margin-bottom: 7px;

    &:hover{
        transition: all 0.2;
        background: '#6d5547';
    }
`;

export const Image = styled.img`
    width: 150px;
    height: 200px;

    &:hover{
        transition: all 0.3s ease-in-out;
        transform: scale(1.2);
        z-index: 99;
    }
`;

export const PartPrice = styled.span`
    text-align: left;
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 3px;
    opacity: 0.8;
`;

export const Favourite = styled(FiHeart)`
    cursor: pointer;

    &:hover{
        color: red;
    }
`;