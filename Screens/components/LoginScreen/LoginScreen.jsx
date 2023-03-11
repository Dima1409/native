import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState(null);

  const { height, width } = useWindowDimensions();
  const portrait = height > width;

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (state.email === "" || state.password === "") {
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
          source={require("../../../image/photo.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {portrait? <><View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 0 : 20,
              }}
            >
              <View>
                <Text style={styles.header}>Войти</Text>
              </View>
              <View style={styles.label}>
                <TextInput
                  style={{...styles.input, borderColor: isFocused==="email" ? '#ff6c00' : '#e8e8e8'}}
                  value={state.email}
                  placeholder={"Адрес электронной почты"}
                  onFocus={() => {
                    setIsShowKeyboard(true)
                    setIsFocused("email")
                  }}
                  onBlur={()=>setIsFocused(null)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                ></TextInput>
              </View>
              <View style={[styles.label]}>
                <TextInput
                  style={{...styles.input, borderColor: isFocused === "pass" ? '#ff6c00' : '#e8e8e8'}}
                  value={state.password}
                  placeholder={"Пароль"}
                  secureTextEntry={hidePassword}
                  onFocus={() => {
                    setIsShowKeyboard(true)
                    setIsFocused("pass")
                  }}
                  onBlur={()=>setIsFocused(null)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
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
                <Text style={styles.btnText}>Войти</Text>
              </TouchableOpacity>
              <Text style={styles.account}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </View>
            </> : <ScrollView><View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 0 : 20,
              }}
            >
              <View>
                <Text style={styles.header}>Войти</Text>
              </View>
              <View style={styles.label}>
                <TextInput
                  style={{...styles.input, borderColor: isFocused==="email" ? '#ff6c00' : '#e8e8e8'}}
                  value={state.email}
                  placeholder={"Адрес электронной почты"}
                  onFocus={() => {
                    setIsShowKeyboard(true)
                    setIsFocused("email")
                  }}
                  onBlur={()=>setIsFocused(null)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                ></TextInput>
              </View>
              <View style={[styles.label]}>
                <TextInput
                  style={{...styles.input, borderColor: isFocused === "pass" ? '#ff6c00' : '#e8e8e8'}}
                  value={state.password}
                  placeholder={"Пароль"}
                  secureTextEntry={hidePassword}
                  onFocus={() => {
                    setIsShowKeyboard(true)
                    setIsFocused("pass")
                  }}
                  onBlur={()=>setIsFocused(null)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
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
                <Text style={styles.btnText}>Войти</Text>
              </TouchableOpacity>
              <Text style={styles.account}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </View></ScrollView>}
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
    marginTop: 120,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    fontSize: 30,
    marginBottom: 22,
    marginTop: 80,
    fontWeight: 500,
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
    color: "#bdbdbd",
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
  },
});

export default LoginScreen;
