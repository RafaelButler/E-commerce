import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 15px 40px;
  border-bottom: 1px solid #cecece;
`;


export const ListaMenu = styled.ul`
   display: flex;
`;

export const MenuLink = styled(Link)`
    color: #222;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
    margin: 10px;
    
    &:hover{
      color: var(--primary);
      transition: all 0.2s;
    }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.h1`
  font-weight: 400;
`;

export const LogoContrast = styled(motion.span)`
  color: var(--primary);
`;

export const Cart = styled(BiCartAlt)`
    color: var(--primary);
    height: 45px;
    font-size: 22px;
    cursor: pointer;
    margin-left: 1rem;
`;