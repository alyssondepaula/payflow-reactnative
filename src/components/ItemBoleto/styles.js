import styled from 'styled-components/native';
import person from '../../../assets/images/person.png';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-self: center;
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
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.Text`
  font-size: 17px;
  font-weight: 400;
  color: #585666;
`;

export const ProductValue = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #474552;
`;

export const DateBoleto = styled.Text`
  font-size: 13px;
  font-weight: 400;
  color: #706E7A;
`;

export const ImgProfile = styled.Image.attrs(props => ({
   source: props.img || person,
   resizeMode: 'contain'
  }))`
   width: 100%;
   height: 100%;
  `;



