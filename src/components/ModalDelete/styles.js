import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  
`;

export const TextInfoDelete = styled.Text`
  align-self: center;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: #585666;
  width: 219px;
`;

export const ButtonContainer = styled.View`
 
  flex-direction: row;
  justify-content: space-around;
  margin-top: 24px;
`;

export const ButtonOption = styled.TouchableOpacity`
  width: 156px;
  height: 55px;
  background-color: #FAFAFC;
  border: 1px;
  border-color: #E3E3E5;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const LineHorizontal = styled.View`
   background-color: #E3E3E5;
   width: 100%;
   height: 0px;
   align-self: center;
   margin-top: 24px;
   border: 1px;
   border-color: #E3E3E5;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  margin-top: 16px;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextDelete = styled.Text`
  align-self: center;
  margin-left: 16px;
  font-size: 15px;
  font-weight: 400;
  color: #E83F5B;
`;