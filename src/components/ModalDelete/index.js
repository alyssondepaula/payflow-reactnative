import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';


import { ButtonContainer, ButtonDelete, ButtonOption, Container, LineHorizontal, TextDelete, TextInfoDelete } from './styles';

const ModalDelete = ({nome, valor, handlePresentModalPressClose}) => {


  return (<Container>
   <TextInfoDelete>O boleto 
   <TextInfoDelete style={{fontWeight: 'bold'}}>{nome} </TextInfoDelete>
     no valor de <TextInfoDelete style={{fontWeight: 'bold'}}>R$ {valor} </TextInfoDelete>foi pago ?</TextInfoDelete>
    <ButtonContainer>
        <ButtonOption onPress={()=> handlePresentModalPressClose()}>
            <TextInfoDelete style={{ fontSize: 15}}>Ainda Não</TextInfoDelete>
        </ButtonOption>
        <ButtonOption style={{backgroundColor: '#FF941A'}}>
        <TextInfoDelete style={{ fontSize: 15, color: '#fff'}}>Sim</TextInfoDelete>
        </ButtonOption>
    </ButtonContainer>
    <LineHorizontal/>
    <ButtonDelete>
    <Feather name="trash-2" size={24} color="#E83F5B" />
    <TextDelete>Deletar Boleto</TextDelete>
    </ButtonDelete>
  </Container>);
}

export default ModalDelete;