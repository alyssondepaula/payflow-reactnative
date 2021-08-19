import React from 'react';
import { View } from 'react-native';

import { Container, LineVertical, LogoMini, TextInfo } from './styles';

const BarInfoBoletosPendentes = ({ quantidadeBoletos }) => {
 
  const [plural, setPlural] = React.useState(false);

  React.useEffect(()=>{
    
    { quantidadeBoletos > '1' ? setPlural(true) : setPlural( false )}
     
  },[quantidadeBoletos])  
  


  const status = {
      
      notPending: 'Você não tem boletos para pagar', 

      onePending:   <TextInfo>Você tem 
      <TextInfo style={{fontWeight: 'bold'}}> {quantidadeBoletos} boleto </TextInfo> 
            cadastrado para pagar
  </TextInfo>,

      morePending:   <TextInfo>Você tem 
      <TextInfo style={{fontWeight: 'bold'}}> {quantidadeBoletos} boletos </TextInfo> 
            cadastrados para pagar
  </TextInfo>
    
    
    }

 

  


  return <Container>
      <LogoMini/>
      <LineVertical/>
       
       { quantidadeBoletos == '0' ? null : 
       
       plural ? status.morePending : status.onePending
       
       }
   


    
  </Container>;
}

export default BarInfoBoletosPendentes;