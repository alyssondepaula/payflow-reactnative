import styled from 'styled-components/native';
import person from '../../../assets/images/person.png'
import logomini from '../../../assets/images/logomini.png'
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  flex-direction: column;
`;

export const TopContainer = styled.View`
  width: 100%;
  height: 270px;
  background-color: orange;
`;

export const Person = styled.ImageBackground.attrs({
   source: person
})`
  width: 208px;
  height: 373px;
  align-self: center;
  margin-top: 7px;
`;

export const Logomini = styled.Image.attrs({
  source: logomini
})`
 width: 72px;
 height: 44px;
 align-self: center;
 margin-top: 144px;
`;

export const TextHeading = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: #585666;
  width: 236px;
  align-self: center;
  text-align: center;
  margin-top: 24px;
`;
