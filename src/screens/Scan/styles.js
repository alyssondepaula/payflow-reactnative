import { Pressable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: black;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.View`
  width: 100%;
  height: 119px;
  align-self: flex-start;
  background-color: black;
  z-index: 1;
`;

export const Bottom = styled.View`
  width: 100%;
  height: 60px;
  align-self: flex-end;
  background-color: black;
  z-index: 1;
`;

export const BottomButtom = styled(Pressable)`
  width: 100%;
  height: 60px;
  align-self: flex-end;
  background-color: white;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;


export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: 100;
  color: #585666;
  
`;
