import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../Screens/Home';
import Orderplaced from '../Screens/Orderplaced';

const Stack= createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name={'Home'} component={Home}/>
    <Stack.Screen name="Orderplaced" component={Orderplaced} options={{ headerShown: false }} />
   </Stack.Navigator>
  )
}

export default HomeStack
