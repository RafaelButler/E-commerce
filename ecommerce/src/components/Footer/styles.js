import styled from 'styled-components';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
    display: grid;
    background-color: var(--secondary);
    grid-template-columns: 33% 33% 33%;
    margin: 0 auto;
    text-align: center;
    padding: 60px 360px;
    height: 300px;
`;

export const Collunm = styled.div`
    margin: 20px;
`;

export const Copyright = styled.div`
    width: 100%;
    background: var(--secondary);
    height: 65px;
    padding: 8px;
    display: flex;
    align-items: center;
    border: 1px solid #c3c3c3;
`;

export const FooterSubtitle = styled.h3`
    font-size: 17px;
    text-align: left;
    font-weight: 600;
    color: #000;    
`;

export const InfoText = styled.p`
    font-size: 16px;
    text-align: left;
    margin-top: 20px;
    opacity: 0.8;
    color: #222;
`;