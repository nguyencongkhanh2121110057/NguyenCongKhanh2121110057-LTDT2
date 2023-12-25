import React from "react";
import HomeScreen from "../screen/home";
import Products from "../screen/products";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import User from "../screen/user";
import Cart from "../screen/cart";
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size="25"
                color={focused ? "red" : "gray"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={"Cart"}
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="shoppingcart"
                size="25"
                color={focused ? "red" : "gray"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={"User"}
        component={User}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="user"
                size="25"
                color={focused ? "red" : "gray"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={"Heart"}
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="hearto"
                size="25"
                color={focused ? "red" : "gray"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
