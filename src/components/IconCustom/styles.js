import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${props=> props.width || 48}px;
  height: ${props=> props.width || 48}px;
  background-color: ${props=> props.backgroundColor || '#585666'};
  border-radius: ${props=> props.borderRadius || 5}px;
  align-items: center;
  justify-content: center;
  
`;
