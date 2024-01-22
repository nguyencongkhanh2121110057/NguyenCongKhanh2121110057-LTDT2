import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Platform, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TextInput as WebTextInput } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../Utils/MyColor";

// Conditionally use TextInput based on the platform
const TextInput = Platform.OS === "web" ? WebTextInput : require("react-native").TextInput;

const Login = ({ route }) => {
  const navigation = useNavigation();
  const { registeredUsername } = route.params || {};

  const hardcodedUsers = [
    { username: 'nck1', password: '1' },
    { username: 'nck2', password: '1' },
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleLogin = () => {
    console.log('Attempting login with:', username, password);
    const user = hardcodedUsers.find((u) => u.username === username && u.password === password);

    if (user) {
      console.log('Login successful for user:', user);
      setLoginError(null);
      Alert.alert('Thông báo', 'Đăng nhập thành công!');
      navigation.navigate('Home', { username: registeredUsername });
    } else {
      console.log('Login failed');
      setLoginError('Tên người dùng hoặc mật khẩu không đúng.');
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Đăng Nhập</Text>

          <Text style={styles.labelText}>Tài khoản</Text>
          <TextInput
            maxLength={10}
            keyboardType="name-phone-pad"
            style={styles.textInput}
            onChangeText={(val) => setUsername(val)}
          />

          <Text style={styles.labelText}>Mật khẩu</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              maxLength={10}
              keyboardType="ascii-capable"
              style={[styles.textInput, styles.passwordInput]}
            />
          </View>

          {loginError && <Text style={styles.errorText}>{loginError}</Text>}
          {registeredUsername && (
            <Text style={styles.successText}>
              Đã đăng ký thành công với tên người dùng: {registeredUsername}
            </Text>
          )}

          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Đăng Nhập</Text>
          </TouchableOpacity>

          <View style={styles.signupLinkContainer}>
            <Text style={[styles.signupText, { color: "black" }]}>Chưa có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ fontSize: 15, color:"green", fontWeight: 600 }}>Đăng ký ngay </Text>
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
    backgroundColor: 'white',
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
  loginButton: {
    backgroundColor: myColors.primary,
    marginTop: 30,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 18,
    color: myColors.secondary,
    fontWeight: "bold",
  },
  signupLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    color: myColors.primary,
  },
  errorText: {
    color: myColors.error,
    marginTop: 10,
    textAlign: 'center',
  },
  successText: {
    color: myColors.success,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Login;
