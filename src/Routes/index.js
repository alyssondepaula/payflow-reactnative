import React from 'react';
import { View } from 'react-native';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

// import { Container } from './styles';

const Routes = () => {
 
  const Logged = false;



  return Logged ? <AppRoutes/> : <AuthRoutes />;
}

export default Routes;