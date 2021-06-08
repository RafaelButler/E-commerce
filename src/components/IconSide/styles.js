import styled from 'styled-components';
import { BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    position: fixed;
    background-color: var(--primary);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    right: 0;
    text-decoration: none;
    top: 35%;
    width: 9rem;
`;

export const Cart = styled(BiCartAlt)`
`;