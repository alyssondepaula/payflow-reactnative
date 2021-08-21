import React from 'react';
import { Alert, Platform, StatusBar, View } from 'react-native';
import { Foundation } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';


import { Button, ButtonView, 
  Container, FormContainer, 
  IconView, Input, InputView, 
  TextButton, TextHead } from './styles';

const ManualAddBoleto = () => {

  const navigation = useNavigation();
  const route = useRoute();


  const[editable,setEditable] = React.useState(true)

  const[nomeBoleto,setNomeBoleto] = React.useState('')
  const[vencimentoBoleto,setVencimentoBoleto] = React.useState('')
  const[valorBoleto,setValorBoleto] = React.useState('')
  const[codigoBoleto,setCodigoBoleto] = React.useState('')

  React.useEffect(()=>{

    const fill = () => {

      setNomeBoleto(route.params.nome)
      setVencimentoBoleto(route.params.vencimento)
      setValorBoleto(route.params.valor)
      setCodigoBoleto(route.params.codigo)  
      
      setEditable(false)

    }

    const check = route.params?.codigo;
    check ? fill() : null

  },[])

  const saveData = () => {

    let error;
    
    codigoBoleto === '' ? error= 'O código do boleto não pode ser vazio' : null;
    vencimentoBoleto === '' ? error= 'A data de vencimento não pode ser vazio' : null
    valorBoleto === '' ? error= 'Insira um valor maior que R$ 0,00' : null
    nomeBoleto === '' ? error= 'O nome não pode ser vazio' : null 

    Alert.alert(error)
  }


  return <Container       
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     >
    <StatusBar backgroundColor="white" barStyle={'dark-content'} />
    <View>
    <TextHead>Preencha os dados do boleto</TextHead>
    <FormContainer>
      <InputView>
      <IconView>
      <Foundation name="page" size={24} color="#FF941A" />
      </IconView>
      <Input 
      placeholder='Nome do boleto' 
      placeholderColor='#B1B0B8'
      onChangeText={setNomeBoleto}
      value={nomeBoleto}
      />
      </InputView>

      <InputView>
      <IconView>
      <Foundation name="x-circle" size={24} color="#FF941A" />
      </IconView>
      <Input 
      editable={editable}
      placeholder='Vencimento' 
      placeholderColor='#B1B0B8'
      onChangeText={setVencimentoBoleto}
      value={vencimentoBoleto}
      />
      </InputView>

      <InputView>
      <IconView>
      <Foundation name="credit-card" size={24} color="#FF941A" />
      </IconView>
      <Input 
      editable={editable}
      placeholder='Valor' 
      placeholderColor='#B1B0B8'
      onChangeText={setValorBoleto}
      value={valorBoleto}
      />
      </InputView>

      <InputView>
      <IconView>
      <AntDesign  name="barcode" size={24} color="#FF941A" />
      </IconView>
      <Input 
      editable={editable}
      placeholder='Código' 
      placeholderColor='#B1B0B8'
      onChangeText={setCodigoBoleto}
      value={codigoBoleto}
      />
      </InputView>
    </FormContainer>
    </View>

    <ButtonView>
      <Button  onPress={() => { 
        
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'bottom' },
            ],
          })
        );
      
      
      }}
      ><TextButton>Cancelar</TextButton></Button>
      
      <Button onPress={()=>{ saveData() }}
      ><TextButton style={{color: '#FF941A'}}>Cadastrar</TextButton></Button>
    </ButtonView>
  </Container>
}

export default ManualAddBoleto;