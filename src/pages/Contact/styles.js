import styled from 'styled-components';
import {CartTitle, FinalizarBotao} from '../Cart/styles';
import { Section } from '../../styles/GlobalStyles';

export const Container = styled.div`
  
`;

export const ContactTitle = styled(CartTitle)`

`;

export const SectionContact = styled(Section)`

`;

export const SubmitButton = styled(FinalizarBotao)`
    width: 87%;

    &:hover{
        transition: all 0.2s;
        background: #71594b;
    }
`;

export const Input = styled.input`
    padding: 10px 15px;
    width: 50%;
    margin: 13px;
`;

export const Textarea = styled.textarea`
    padding: 10px 15px;
`;

export const WrapperInput = styled.div`
    display: flex;
`;

export const Message = styled.p`
    text-align: center;
    position: relative;
    bottom: 60px;
`;
