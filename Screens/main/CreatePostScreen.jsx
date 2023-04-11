import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { FontAwesome, EvilIcons, AntDesign } from "@expo/vector-icons";

const CreatePostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.postImage}>
          <TouchableOpacity
            style={styles.photoIconCamera}
            onPress={() => console.log("press photo icon")}
          >
            <FontAwesome name="camera" size={24} color={"#BDBDBD"} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.downloadPhoto}>Загрузите фото</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.inputForm}
            inputMode="text"
            placeholder="Название..."
            placeholderTextColor={"#BDBDBD"}
          />
          <View style={styles.inputWrapper}>
            <TouchableOpacity style={styles.iconLocal}>
              <EvilIcons name="location" size={24} color="#bdbdbd" />
            </TouchableOpacity>
            <TextInput
              style={{ ...styles.inputForm, paddingLeft: 26 }}
              inputMode="text"
              placeholder="Местность..."
              placeholderTextColor={"#BDBDBD"}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            navigation.navigate("PostsScreen");
          }}
        >
          <Text style={{ color: "#BDBDBD", fontSize: 16 }}>Опубликовать</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDelete}>
          <AntDesign name="delete" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 22,
    backgroundColor: "#fff",
  },
  postImage: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "rgba(232, 232, 232, 1)",
  },
  photoIconCamera: {
    width: 60,
    height: 60,
    padding: 16,
    backgroundColor: "#fff",
    border: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  downloadPhoto: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 20,
  },
  inputWrapper: {
    position: "relative",
  },
  iconLocal: {
    position: "absolute",
    top: 14,
  },
  inputForm: {
    fontSize: 16,
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  btnSubmit: {
    justifyContent: "center",
    marginTop: 22,
    alignItems: "center",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F6F6F6",
    marginBottom: 50,
  },
  buttonDelete: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export default CreatePostScreen;
