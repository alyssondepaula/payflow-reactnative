import styled from 'styled-components/native';
import person from '../../../assets/images/person.png';

export const Container = styled.View`
  width: 327px;
  height: 48px;
  flex-direction: row;
  align-self: center;
  margin-top: 18px;
  align-Items: center;

  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  width: 48px;
  height: 48px;
  flex-direction: row;
  background-color: #585666;
  border-radius: 5px;
`;

export const Frases = styled.View`
  flex-direction: column;
`;

export const TextProfile = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  
`;

export const ImgProfile = styled.Image.attrs(props => ({
   source: props.img || person,
   resizeMode: 'contain'
  }))`
   width: 100%;
   height: 100%;
  `;



