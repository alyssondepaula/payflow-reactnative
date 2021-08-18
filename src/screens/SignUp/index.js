import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StatusBar, View } from 'react-native';
import GoogleSignInButton from '../../components/GoogleSignInButton';

import { Container, Linear, Logomini, Person, TextHeading, TopContainer } from './styles';

const SignUp = () => {
  return <Container>
     <StatusBar backgroundColor="orange" barStyle={'light-content'} />
    <TopContainer>
    <Person>
    <LinearGradient
             colors={['#00000000', '#00000000', '#00000000', '#fff']}
             style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%'
     }}
     />
      
       
      
      </Person>
     
     
     
    </TopContainer>
    <Logomini/>
    <TextHeading>Organize seus boletos em um só lugar</TextHeading>
    <GoogleSignInButton/>
   
  </Container>
}

export default SignUp;