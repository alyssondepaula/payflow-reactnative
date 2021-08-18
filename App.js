import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/context/auth';
import Routes from './src/Routes';

export default function App() {

  return (
    <NavigationContainer>
         <AuthProvider>
           <Routes/>
         </AuthProvider>
    </NavigationContainer>
  );
}