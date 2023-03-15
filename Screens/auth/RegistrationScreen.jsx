import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const portrait = height > width;

  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState(null);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const handleSubmit = () => {
    if (state.login === "" || state.email === "" || state.password === "") {
      Alert.alert("Заполните все поля");
      return;
    }
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("../../image/photo.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {portrait ? (
              <>
                <View
                  style={{
                    ...styles.form,
                    marginTop: isShowKeyboard ? 0 : 120,
                  }}
                >
                  <View style={styles.imageAvatar}>
                    <Image style={styles.image} alt="avatar icon"></Image>
                    <TouchableOpacity activeOpacity={0.8}>
                      <AntDesign
                        name="pluscircleo"
                        size={26}
                        color="#FF6C00"
                        style={styles.loadIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.header}>Регистрация</Text>
                  </View>
                  <View style={styles.label}>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderColor:
                          isFocused === "login" ? "#ff6c00" : "#e8e8e8",
                      }}
                      value={state.login}
                      placeholder={"Логин"}
                      placeholderTextColor={"#bdbdbd"}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsFocused("login");
                      }}
                      onBlur={() => setIsFocused(null)}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          login: value,
                        }))
                      }
                    ></TextInput>
                  </View>
                  <View style={styles.label}>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderColor:
                          isFocused === "email" ? "#ff6c00" : "#e8e8e8",
                      }}
                      value={state.email}
                      placeholder={"Адрес электронной почты"}
                      placeholderTextColor={"#bdbdbd"}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsFocused("email");
                      }}
                      onBlur={() => setIsFocused(null)}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                    ></TextInput>
                  </View>
                  <View style={[styles.label]}>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderColor:
                          isFocused === "pass" ? "#ff6c00" : "#e8e8e8",
                      }}
                      value={state.password}
                      placeholder={"Пароль"}
                      placeholderTextColor={"#bdbdbd"}
                      secureTextEntry={hidePassword}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsFocused("pass");
                      }}
                      onBlur={() => setIsFocused(null)}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    ></TextInput>
                    <TouchableOpacity
                      style={styles.pass}
                      onPress={toggleHidePassword}
                    >
                      <Ionicons
                        style={styles.icon}
                        name={hidePassword ? "eye-off" : "eye"}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={{
                      ...styles.btnSubmit,
                      marginVertical: isShowKeyboard === false ? 20 : 10,
                    }}
                    activeOpacity={0.8}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.btnText}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                  {isShowKeyboard === false ? (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Login")}
                    >
                      <Text style={{ ...styles.account, color: "#212121", textDecorationLine: "none" }}>
                        Уже есть аккаунт?
                        <Text>  </Text>
                        <Text style={styles.account}>Войти</Text>
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </>
            ) : (
              <ScrollView>
                <View
                  style={{
                    ...styles.form,
                    marginTop: isShowKeyboard ? 0 : 120,
                  }}
                >
                  <View style={styles.imageAvatar}>
                    <Image style={styles.image} alt="avatar icon"></Image>
                    <TouchableOpacity activeOpacity={0.8}>
                      <AntDesign
                        name="pluscircleo"
                        size={26}
                        color="#FF6C00"
                        style={styles.loadIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.header}>Регистрация</Text>
                  </View>
                  <View style={styles.label}>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderColor:
                          isFocused === "login" ? "#ff6c00" : "#e8e8e8",
                      }}
                      value={state.login}
                      placeholder={"Логин"}
                      placeholderTextColor={"#bdbdbd"}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsFocused("login");
                      }}
                      onBlur={() => setIsFocused(null)}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          login: value,
                        }))
                      }
                    ></TextInput>
                  </View>
                  <View style={styles.label}>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderColor:
                          isFocused === "email" ? "#ff6c00" : "#e8e8e8",
                      }}
                      value={state.email}
                      placeholder={"Адрес электронной почты"}
                      placeholderTextColor={"#bdbdbd"}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsFocused("email");
                      }}
                      onBlur={() => setIsFocused(null)}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                    ></TextInput>
                  </View>
                  <View style={[styles.label]}>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderColor:
                          isFocused === "pass" ? "#ff6c00" : "#e8e8e8",
                      }}
                      value={state.password}
                      placeholder={"Пароль"}
                      placeholderTextColor={"#bdbdbd"}
                      secureTextEntry={hidePassword}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsFocused("pass");
                      }}
                      onBlur={() => setIsFocused(null)}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    ></TextInput>
                    <TouchableOpacity
                      style={styles.pass}
                      onPress={toggleHidePassword}
                    >
                      <Ionicons
                        style={styles.icon}
                        name={hidePassword ? "eye-off" : "eye"}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={{
                      ...styles.btnSubmit,
                      marginVertical: isShowKeyboard === false ? 20 : 10,
                    }}
                    activeOpacity={0.8}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.btnText}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                  {isShowKeyboard === false ? (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Login")}
                    >
                      <Text style={{ ...styles.account, color: "#212121", textDecorationLine: "none" }}>
                        Уже есть аккаунт?
                        <Text>  </Text>
                        <Text style={styles.account}>Войти</Text>
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </ScrollView>
            )}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  imageAvatar: {
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },
  loadIcon: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 13,
    top: 20,
    left: 46,
    overflow: "hidden",
  },
  header: {
    fontSize: 30,
    fontFamily: "Roboto-Bold",
    marginBottom: 22,
    paddingTop: 80,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  label: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  btnSubmit: {
    height: 50,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 20,
    marginHorizontal: 16,
    gap: 12,
    backgroundColor: "#ff6c00",
    borderRadius: 25,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
  },
  pass: {
    position: "absolute",
    top: 8,
    right: 32,
  },
  icon: {
    color: "#bdbdbd",
  },
  account: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 20,
    textDecorationLine: "underline"
  },
});

export default RegistrationScreen;
