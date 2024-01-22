import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabRouter from "./TabRouter";
import ProductDetails from "../Screens/ProductDetails";
import SearchScreen from "../Screens/Search";
// import Prodel from '../Screens/Prodel';
// import Detai_pro from '../Screens/Prodel';
// import ProductDetails from '../Screens/ProductDetails';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={TabRouter} name={"Home"} />
        <Stack.Screen component={ProductDetails} name={"Detail"} />
        {/* <Stack.Screen component={SearchScreen} name={"Search"} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
