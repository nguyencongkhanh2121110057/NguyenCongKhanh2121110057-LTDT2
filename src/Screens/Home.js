import { View, Text, Image,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTile from "../Components/ProductsTile";
import ProductsCarousel from "../Components/ProductsCarousel";
import { fruits } from "../Utils/Date";

const Home = () => {
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
    <SafeAreaView style={{ paddingHorizontal: 10, paddingTop: 10,backgroundColor:"while" }}>
      <HomeIcon />
      <HomeSearch/>
      <HomeBanner/>
      <ProductsTile title="TRANH SƠN DẦU"/>
      <ProductsCarousel data={fruits}/>
      <ProductsTile title="TRANH PHONG CẢNH"/>
      <ProductsCarousel data={fruits}/> 
      
    </SafeAreaView>
    </ScrollView>
  );
};
export default Home;
