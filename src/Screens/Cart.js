import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../Utils/MyColor";
import Orderplaced from "./Orderplaced";

const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const [searchText, setSearchText] = useState("");
  const [quantities, setQuantities] = useState({});

  const incrementQuantityHandler = (name) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: (prevQuantities[name] || 0) + 1,
    }));
  };

  const decrementQuantityHandler = (name) => {
    if (quantities[name] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [name]: prevQuantities[name] - 1,
      }));
    }
  };

  const handleRemoveItem = (itemName) => {
    dispatch(removeFromCart({ name: itemName }));
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemName];
      return updatedQuantities;
    });
  };

  const filteredData = storeData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "white" }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Giỏ hàng</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm sản phẩm"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={({ item, index }) => (
          <View style={styles.cartItemContainer}>
            <Image style={styles.cartItemImage} source={{ uri: item.img }} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Giá: {item.price}$</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementQuantityHandler(item.name)}>
                  <AntDesign name="minus" size={24} color={myColors.primary} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantities[item.name] || 1}</Text>
                <TouchableOpacity onPress={() => incrementQuantityHandler(item.name)}>
                  <AntDesign name="plus" size={24} color={myColors.primary} />
                </TouchableOpacity>
              </View>
              <Text style={styles.totalPriceText}>Tổng: {item.price * (quantities[item.name] || 1)}$</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(item.name)} style={styles.removeIconContainer}>
                <Feather name="trash-2" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.checkoutButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate(Orderplaced);
          }}
          style={styles.checkoutButton}
        >
          <Text style={styles.checkoutButtonText}>Mua</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "600",
    flex:1,
  },
  searchInput: {
    height: 50,
    borderColor: myColors.primary,
    borderWidth: 1,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  cartItemContainer: {
    height: responsiveHeight(19.5),
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartItemImage: {
    height: 120,
    width: 120,
    resizeMode: "contain",
    marginTop: 20,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
  },
  totalPriceText: {
    color: 'red',
    top: 35,
  },
  removeIconContainer: {
    top: 20,
    left: 210,
    borderRadius: 10,
    padding: 5,
  },
  checkoutButtonContainer: {
    flex: 0.9,
    justifyContent: "flex-end",
  },
  checkoutButton: {
    backgroundColor: myColors.primary,
    borderRadius: 20,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
};

export default Cart;
