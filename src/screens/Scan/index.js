import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useWindowDimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Bottom, Container, Top } from './styles';
import { useIsFocused } from '@react-navigation/native';

const Scan = () => {

    const isFocused = useIsFocused();
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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
  </Container>
}

export default Scan;