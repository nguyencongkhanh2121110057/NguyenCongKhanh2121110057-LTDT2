import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
const HomeScreen = () => {
  return (
    <View className="px-5 mt-10">
      <ScrollView>
        <View className="flex flex-row items-center flex-wrap ">
          <View className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
            <View className="overflow-hidden relative">
              <Image
                className="w-full h-[300px] transition duration-700 ease-in-out group-hover:opacity-60"
                source={{
                  uri: "https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/product_img10-1.jpg",
                }}
              />
              <View className="flex justify-center">
                <View className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100"></View>
              </View>
            </View>
            <View className="px-4 py-3 bg-white">
              <Text className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                White Line Dress
              </Text>
              <View className="flex py-2">
                <Text className="mr-2 text-xs text-gray-600">$45.00</Text>
                <Text className="mr-2 text-xs text-red-600 line-through">
                  $15.00
                </Text>
              </View>
              <View className="flex">
                <View className=""></View>
                <View className="ml-2">
                  <Text className="text-gray-500 font-medium text-sm">(1)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    
    
  );
};

export default HomeScreen;
