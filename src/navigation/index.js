import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={TabNavigation} name={"TabHome"} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
