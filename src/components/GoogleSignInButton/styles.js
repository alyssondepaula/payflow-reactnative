import styled from 'styled-components/native';
import google from '../../../assets/images/google.png';

export const Container = styled.View`
width: 295px;
height: 56px;
color: #FAFAFC;
align-self: center;
margin-bottom: 64px;
flex-direction: row;
align-items: center;
border-color: #E3E3E5;
border-width: 2px;
margin-top: 46px;
border-radius: 5px;
`;

export const Google = styled.Image.attrs({
    source: google
  })`
   width: 24px;
   height: 24px;
   
  `;

export const GoogleLogoContainer = styled.View`
width: 56px;
height: 56px;
justify-content: center;
align-items: center;
border-color: #E3E3E5;
border-right-width: 2px;
`;

export const TextButtonContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;


export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #585666;
  
`;