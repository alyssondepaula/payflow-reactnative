import React from 'react';
import { View } from 'react-native';

import { Container, Google, GoogleLogoContainer, TextButton, TextButtonContainer } from './styles';

const GoogleSignInButton = () => {
  return <Container>
      <GoogleLogoContainer>
      <Google/>
      </GoogleLogoContainer>
      <TextButtonContainer>
   <TextButton>Entrar com Google</TextButton>
   </TextButtonContainer>
  </Container>;
}

export default GoogleSignInButton;