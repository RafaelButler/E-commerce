import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html{
        height: 100%;
        min-height: 100vh;
        background-color: #fafafa;
        font-family: 'Poppins', sans-serif;
    }

    :root{
        --primary: #8d6e5c;
        --secondary: #e7e9e8;
    }
`;

export const Section = styled.div`
    height: 500px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: auto; */
`;