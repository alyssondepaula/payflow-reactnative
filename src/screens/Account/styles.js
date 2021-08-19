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
  height: 106px;
  background-color: orange;
`;

export const HeadContainer = styled.View`
   flex-direction: row;
   margin-top: 24px;
   align-items: flex-end;
   width: 327px;
   align-self: center;
   justify-content: space-between;
`;

export const TextHeadFlatlist = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #585666; 
`;

export const LineHorizontal = styled.View`
   background-color: #E3E3E5;
   width: 327px;
   height: 0px;
   align-self: center;
   margin-top: 24px;
   border: 1px;
   border-color: #E3E3E5;
`;
