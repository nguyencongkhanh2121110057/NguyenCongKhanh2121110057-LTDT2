import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TextInput as WebTextInput } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../Utils/MyColor";

// Conditionally use TextInput based on the platform
const TextInput = Platform.OS === "web" ? WebTextInput : require("react-native").TextInput;

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = userCredentials;
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Perform signup logic here
    console.log("Sign Up Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Đăng ký</Text>

          <Text style={styles.labelText}>Tài khoản</Text>
          <TextInput
            maxLength={10}
            keyboardType="name-phone-pad"
            style={styles.textInput}
            onChangeText={(val) => setUserCredentials({ ...userCredentials, username: val })}
          />

          <Text style={styles.labelText}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(val) => setUserCredentials({ ...userCredentials, email: val })}
            keyboardType="email-address"
            style={styles.textInput}
          />

          <Text style={styles.labelText}>Mật khẩu</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={(val) => setUserCredentials({ ...userCredentials, password: val })}
              secureTextEntry={true}
              maxLength={10}
              keyboardType="ascii-capable"
              style={[styles.textInput, styles.passwordInput]}
            />
          </View>

          <TouchableOpacity onPress={handleSignUp} style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Đăng ký</Text>
          </TouchableOpacity>

          <View style={styles.loginLinkContainer}>
            <Text style={[styles.loginText,{color:"black"}]}>Đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={[styles.loginText, styles.loginLink]}>Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white', // Đổi màu nền thành trắng
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    height: 80,
    width: 200,
    resizeMode: "contain",
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerText: {
    color: myColors.third,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "600",
    color: myColors.primary,
    marginTop: 10,
  },
  textInput: {
    borderColor: myColors.primary,
    borderBottomWidth: 1,
    marginTop: 10,
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 8,
  },
  passwordContainer: {
    borderColor: myColors.primary,
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  passwordInput: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 8,
  },
  signupButton: {
    backgroundColor: myColors.primary,
    marginTop: 30,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButtonText: {
    fontSize: 18,
    color: myColors.secondary,
    fontWeight: "bold",
  },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    color: myColors.primary,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Signup;
