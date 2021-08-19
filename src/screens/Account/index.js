
import React from 'react';
import { Animated, StatusBar } from 'react-native';
import BarInfoBoletosPendentes from '../../components/BarInfoBoletosPendentes';
import BarInfoProfile from '../../components/BarInfoProfile';
import ItemBoleto from '../../components/ItemBoleto';
import { Container, HeadContainer, LineHorizontal, TextHeadFlatlist, TopContainer } from './styles';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3daqwtq1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'bd7acbea-cqrq2r1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-wqtwq-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3eweweda1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-eec1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afeec-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3dwqwqa1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
];

const ITEM_SIZE_WIDTH = 327;
const TOTAL_ITEM_SIZE = 75;



const Account = () => {

    const scrollY = new Animated.Value(0);



  return <Container>
     <StatusBar backgroundColor="orange" barStyle={'light-content'} />
     <TopContainer>
         <BarInfoProfile nome={'User'}/>
     </TopContainer>
     <HeadContainer>

     <TextHeadFlatlist>Meus extratos</TextHeadFlatlist>
     <TextHeadFlatlist style={{fontWeight: '100', fontSize: 13}}>{DATA.length} pagos</TextHeadFlatlist>
     </HeadContainer>
     <LineHorizontal/>


     <Animated.FlatList style={{marginTop: 32}}
     data={DATA}
     onScroll={Animated.event(
        // scrollX = e.nativeEvent.contentOffset.x
        [{ nativeEvent: {
             contentOffset: {
               y: scrollY
             }
           }
         }], {useNativeDriver: true}
      )}
     renderItem={({item, index}) => {

     const inputRange = [
       -1,
       0,
       TOTAL_ITEM_SIZE * index,
       TOTAL_ITEM_SIZE * (index+1)
       
     ]

     const inputRangeScale = [
        -1,
        0,
        TOTAL_ITEM_SIZE * index,
        TOTAL_ITEM_SIZE * (index+.3)
        
      ]
   

     return <Animated.View 
     style={{width: 327, 
   
     height: 43, 
     marginBottom: 32, 
     alignSelf: 'center',
     opacity: scrollY.interpolate(({
         inputRange,
         outputRange: [1,1,1,0]
        })),

     transform: ([{
         scale: scrollY.interpolate(({
            inputRange,
            outputRange: [1,1,1,0]
           })),
  
     }])}}>
       
       <ItemBoleto nameProduct={'name'} valueProduct={'0,00'} boletoDate={'22/06/1994'}/>
       <LineHorizontal style={{width: '90%', border: .5, opacity: .15}}/>
      </Animated.View>
      }}
     keyExtractor={item => item.id}
     
     
     />
   
  </Container>
}

export default Account;