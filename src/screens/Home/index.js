
import React from 'react';
import { Alert, Animated, StatusBar, TouchableOpacity } from 'react-native';
import BarInfoBoletosPendentes from '../../components/BarInfoBoletosPendentes';
import BarInfoProfile from '../../components/BarInfoProfile';
import ItemBoleto from '../../components/ItemBoleto';
import { Container, LineHorizontal, TextHeadFlatlist, TopContainer } from './styles';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useIsFocused } from '@react-navigation/native';
import { useRef } from 'react';
import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { useCallback } from 'react';
import ModalDelete from '../../components/ModalDelete';



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


const Home = ({ navigation, route, options }) => {

  const { dismiss, dismissAll } = useBottomSheetModal();

  const isFocused = useIsFocused();

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['35%', '35%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handlePresentModalPressClose = useCallback(() => {
    bottomSheetModalRef.current?.dimiss();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const closeModal = () => bottomSheetModalRef.current?.dimiss()
  



  
  React.useEffect(()=>{

   async function changeScreenOrientation (){
        await ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.DEFAULT);
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
       console.log('PORT')
     }

  
   //  changeScreenOrientation()
    },
    [])

  

    const scrollY = new Animated.Value(0);


 

  return <Container>
     
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
      
          bottomInset={0}
        >
          
          <ModalDelete handlePresentModalPressClose={dismissAll} />

        </BottomSheetModal>
     
  
    
      
     <StatusBar backgroundColor="orange" barStyle={'light-content'} />
     <TopContainer>
         <BarInfoProfile nome={'user'}/>
         <BarInfoBoletosPendentes quantidadeBoletos={DATA.length}/>
     </TopContainer>

  
     <TextHeadFlatlist>Meus Boletos:</TextHeadFlatlist>
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

export default Home;