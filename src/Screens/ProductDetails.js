import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Feather } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColor';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';

const ProductDetails = ({ route }) => {
  const dispatch = useDispatch();
  // const {productData} = route.params?.main ||{};

  // const { name, price, img } = productData  || {};;
  // console.log(name);
  const { product } = route.params;
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.header}>
        <Image
          style={styles.productImage}
          source={{ uri: product.img }}
        />
        <TouchableOpacity style={styles.backButton} onPress={() => nav.navigate("Home")}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Feather name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>Giá: {product.price} VND</Text>
        <Text style={styles.additionalInfo}>
        Vẻ đẹp của hồ sen mùa thu thơ mộng, bình an!
Hoa sen là quốc hoa của Việt Nam, là loài hoa tôn quý nhất trong Phật giáo. Gia chủ treo tranh hoa sen sẽ đem lại bình an, may mắn!
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(product));
              nav.navigate("Cart");
            }}
            style={styles.cartButton}
          >
            <Text style={styles.buttonText}>Giỏ hàng</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log("Mua Hàng button clicked");

            }}
            style={[styles.buyButton, { backgroundColor: 'red' }]}
          >
           <Text style={[styles.buttonText, { color: 'white' }]}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.background,
  },
  header: {
    position: 'relative',
  },
  productImage: {
    height: 400,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  shareButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  productInfo: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  productName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  productPrice: {

    fontSize: 20,
    color: 'red',
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cartButton: {
    backgroundColor: myColors.primary,
    borderRadius: 20,
    height: 60,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: myColors.ye,
    borderRadius: 20,
    height: 60,
    width: '45%',
    justifyContent: 'center',

    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProductDetails;