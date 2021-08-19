import styled from 'styled-components/native';
import logomini from '../../../assets/images/logomini.png';

export const Container = styled.View`
width: 327px;
height: 80px;
background-color: #585666;
align-self: center;
position: absolute;
bottom: -40px;
border-radius: 5px;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

export const LogoMini = styled.Image.attrs({
    source: logomini
  })`
   width: 56px;
   height: 34px;

   
`;

export const LineVertical = styled.View`
background-color: #FFFFFF;
 width: 1px;
   height: 32px;
   margin-left: 24px;
   margin-right: 24px;
`;

export const TextInfo = styled.Text`
  flex: 1;
  font-size: 13px;
  font-weight: 400;
  color: #FFFFFF;
  
`;



