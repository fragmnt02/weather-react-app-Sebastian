import React from 'react';
import { Container } from './App.style';
import { createGlobalStyle } from 'styled-components'
import Form from '../Form';
const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Form/>
      </Container>
    </React.Fragment>
  );
}

export default App;
