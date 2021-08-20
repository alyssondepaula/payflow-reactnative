import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/context/auth';
import Routes from './src/Routes';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export default function App() {

  return (

    <NavigationContainer>
      <BottomSheetModalProvider>
         <AuthProvider>
           <Routes/>
         </AuthProvider>
         </BottomSheetModalProvider>
    </NavigationContainer>
  );
}