import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Account from '../screens/Account';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import IconCustom from '../components/IconCustom';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import Scan from '../screens/Scan';
import { useNavigation } from '@react-navigation/native';
import ManualAddBoleto from '../screens/ManualAddBoleto';


const Tab = createBottomTabNavigator();





const BottomTabsScreens = () => {

  const navigation = useNavigation();
  

  return (
    <Tab.Navigator initialRouteName="Home" 
    backBehavior='initialRoute'
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FF941A',
      tabBarInactiveTintColor: '#585666',
      tabBarStyle: {
        
        elevation:  0,
        borderTopWidth: 0,
        height: 75,
        position: 'absolute',
        zIndex: 1,
        
      },
      }}>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Group screenOptions={{ 
        presentation: 'screen',
        headerShown: true,
        
        height: 0,
        tabBarStyle: {
          position: 'absolute',
          height: 0,
          elevation:  0,
          borderTopWidth: 0,
          bottom: -56,
          },
        }}>
        <Tab.Screen 
      name="Scan" 
      component={Scan} 
  
      options={{
        
        headerLeft: () => (
          <TouchableOpacity  onPress={()=> navigation.goBack()} style={{ marginLeft: 17}}>
          <Feather name="arrow-left" color={'#fff'} size={24} 
          />
           </TouchableOpacity>
        ),

        headerTitle: 'Escaneie o código de barras do boleto',

        headerStyle: {
          height: 119,
          backgroundColor: '#000',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '100',
          fontSize: 12
        },
      
        tabBarIcon: () => (
         <IconCustom 
         width={56} height={56} 
         iconName={'plus-square'}
         backgroundColor={'#FF941A'} 
       
         />
        )
      }}
      />
      </Tab.Group> 
      <Tab.Screen 
      name="Account" 
      component={Account} 
      options={{
        
        tabBarIcon: ({ color, size }) => (
          <Feather name="book" color={color} size={size} />
        ),
      }}
      
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();


const AppRoutes = () => {
  return   (
  <Stack.Navigator 
  initialRouteName="bottom" 
  screenOptions={{headerShown: false}}
  >
  <Stack.Screen
  name="bottom"
  component={BottomTabsScreens} 
  />

 <Stack.Screen
  name="manualAdd"
  component={ManualAddBoleto} 
  options={{
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      elevation: 0,
    }
  }}
  />
</Stack.Navigator>);
}


export default AppRoutes;