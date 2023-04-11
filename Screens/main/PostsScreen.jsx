import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostsScreen  = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View>
          <Image
            style={styles.userImage}
            source={require("../../image/logoUser.png")}
          />
        </View>

        <View style={styles.userInfo}>
          <View style={{ width: 200 }}>
            <Text style={styles.userName}>Natali Romanova</Text>
          </View>
          <View style={{ width: 200 }}>
            <Text style={styles.userMail}>email@example.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  user: {
    marginLeft: 16,
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 60,
    height: 60,
  },
  userInfo: {
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userName: {
    fontFamily: "Roboto-Bold",
    color: "#212121",
    fontSize: 13,
    lineHeight: 15,
    margin: 0,
    padding: 0,
  },
  userMail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
    margin: 0,
    padding: 0,
  },
});

export default PostsScreen;