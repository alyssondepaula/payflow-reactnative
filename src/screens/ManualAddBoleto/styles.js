import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextHead = styled.Text`
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  color: #585666;
  margin-top: 66px;
  width: 200px;
  align-self: center;
`;

export const FormContainer = styled.View`
  width: 327px;
 
  flex-direction: column;
  align-self: center;
  margin-top: 24px;
`;

export const InputView = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #E3E3E5;
  margin-bottom: 16px;
`;

export const IconView = styled.View`
  width: 56px;
  height: 56px;
  border-right-width: 1px;
  border-color: #E3E3E5;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  align-items: center;
  padding-left: 16px;
  color: #585666;
  font-size: 15px;
`;

export const ButtonView = styled.View`
  width: 100%;
  height: 73px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #E3E3E5;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  flex-direction: row;
  background-color: #FAFAFC;
  border-top-width: 1px;
  border: 0.5px;
  border-color: #E3E3E5;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: 100;
  color: #585666;
  
`;