import React from 'react';
import { View } from 'react-native';

import { Container, Frases, ImageContainer, ImgProfile, TextProfile } from './styles';

const BarInfoProfile = ({nome}) => {
  return <Container>
      <Frases>
        <TextProfile>Olá, <TextProfile style={{fontWeight: 'bold'}}>{nome}</TextProfile></TextProfile>
        <TextProfile style={{fontSize: 13}}>Mantenha suas contas em dia</TextProfile>
      </Frases>
      <ImageContainer>
          <ImgProfile/>
      </ImageContainer>
  </Container>;
}

export default BarInfoProfile;