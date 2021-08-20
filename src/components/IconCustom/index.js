import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import { Feather } from '@expo/vector-icons';

const IconCustom = ({width, height, backgroundColor, borderRadius, style, iconName  }) => {
  return <Container 
  width={width} 
  heigh={height} 
  backgroundColor={backgroundColor} 
  borderRadius={borderRadius}>
      
  <Feather name={iconName} size={24} color="white" />
  </Container>
}

export default IconCustom;