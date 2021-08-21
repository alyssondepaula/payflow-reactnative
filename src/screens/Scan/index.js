import React, { useState, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useWindowDimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Bottom, BottomButtom, Container, TextButton, Top } from './styles';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Scan = () => {

    const isFocused = useIsFocused();
    const navigation = useNavigation();

    React.useEffect(()=>{

        async function changeScreenOrientation (){
             await ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.DEFAULT);
             await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
            
          }

          async function changeScreenOrientationBack (){
            await ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.DEFAULT);
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
          
         }
     
       
         isFocused ? changeScreenOrientation() : changeScreenOrientationBack()
         },
         [isFocused])

 const { height, width } = useWindowDimensions();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
    let nome='';
    let vencimento= data.substring(4,8);
    let valor= data.substring(10,13)+','+data.substring(13,15);
    let codigo = data.toString();

    alert(vencimento)

navigation.navigate('manualAdd', {
      nome,
      vencimento,
      valor,
      codigo: data.toString()
    });

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return <Container>
      <StatusBar backgroundColor="black" barStyle={'light-content'} />
     
      <View style={{
          flex: 1,
      }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={{
            width: width,
            height: height,
        }}
      />
     
    </View>
    
    <Bottom/>
    <BottomButtom onPress={()=>navigation.navigate('manualAdd')}>
        <TextButton>Inserir código do boleto</TextButton>
    </BottomButtom>
  </Container>
}

export default Scan;