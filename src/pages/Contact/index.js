import React, { useState } from 'react';

import { 
  Container,
  ContactTitle,
  SectionContact,
  Input,
  WrapperInput,
  Textarea,
  SubmitButton, 
  Message,
} from './styles';

export function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');

  const [mostrar, setMostrar] = useState(false);

  const handleSubmit = (event) => {
    setMostrar(true);
  }
  
  return(
      <Container>
        <ContactTitle>Contato</ContactTitle>


        <SectionContact>
          <form>  
            <WrapperInput>
              <Input onChange={(e) => setName(e.target.value)}  value={name} type="text"  required placeholder="Nome"/>
              <Input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required  placeholder="Email"/>
            </WrapperInput>
            <Textarea onChange={(e) => setAssunto(e.target.value)} value={assunto} placeholder="Escreva" rows="10" cols="50"></Textarea>
            <SubmitButton type="button" onClick={() => handleSubmit()}>Enviar</SubmitButton>
          </form>
        </SectionContact>

          {mostrar ? (
            <>
              <Message>{name} sua mensagem foi enviada com sucesso!</Message>
            </>
          ) : ''}
      </Container>
  );
}

