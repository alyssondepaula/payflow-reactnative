import React from 'react';
import { View } from 'react-native';
import SignUp from '../screens/SignUp';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AuthRoutes = () => {
  return   (
  <Stack.Navigator 
  initialRouteName="signup" 
  screenOptions={{headerShown: false}}
  >
  <Stack.Screen
  name="signup"
  component={SignUp} 
  />
</Stack.Navigator>);
}

export default AuthRoutes;