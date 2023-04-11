import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostScreen from "./CreatePostScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const nav = useNavigation();
  const [activeTab, setActiveTab] = useState("PostsScreen");
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          justifyContent: "center",
          paddingLeft: 40,
          paddingRight: 40,
        },
        headerTitleAlign: "center",
        headerStyle: { height: 68 },
        headerShadowVisible: {
          elevation: 1,
          backgroundColor: "#FFFFFF",
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 27.18,
        },
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          marginBottom: 11,
          fontSize: 17,
          lineHeight: 22,
          color: "#212121",
        },
        headerRightContainerStyle: { paddingRight: 16, paddingBottom: 9 },
        headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 9 },
      }}
    >
      <Tab.Screen
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Публикации",
          headerStyle: {
            height: 80,
          },
          headerRight: (focused, color, size) => (
            <TouchableOpacity
              onPress={() => {
                console.log("press logout");
              }}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: (focused, color, size) => (
            <View
              style={[
                styles.tabBarIconContainer,
                {
                  backgroundColor:
                    focused && activeTab === "PostsScreen"
                      ? "#FF6C00"
                      : "#bdbdbd",
                },
              ]}
              onTouchEnd={() => setActiveTab("PostsScreen")}
            >
              <AntDesign name="appstore-o" size={focused && activeTab === "PostsScreen"? 30 : 24 } color={
                  focused && activeTab === "PostsScreen" ? "#fff" : "#212121"
                } />
            </View>
          ),
        })}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: (focused, color, size) => (
            <View
              style={[
                styles.tabBarIconContainer,
                {
                  backgroundColor:
                    focused && activeTab === "CreatePostScreen"
                      ? "#FF6C00"
                      : "#bdbdbd",
                },
              ]}
              onTouchEnd={() => setActiveTab("CreatePostScreen")}
            >
              <AntDesign
                name="plus"
                size={focused && activeTab === "CreatePostScreen"? 30 : 24 }
                color={
                  focused && activeTab === "CreatePostScreen" ? "#fff" : "#212121"
                }
              />
            </View>
          ),
          headerLeft: (focused, color, size) => (
            <TouchableOpacity
              onPress={() => {
                nav.goBack();
              }}
              style={{ marginLeft: 10 }}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color='#212121'
              />
            </TouchableOpacity>
          ),
        }}
        name="CreatePostScreen"
        component={CreatePostScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: (focused, color, size) => (
            <View
              style={{
                ...styles.tabBarIconContainer,
                backgroundColor:
                  focused && activeTab === "ProfileScreen"
                    ? "#FF6C00"
                    : "#bdbdbd",
              }}
              onTouchEnd={() => setActiveTab("ProfileScreen")}
            >
              <Feather
                name="user"
                size={focused && activeTab === "ProfileScreen"? 30 : 24 }
                color={
                  focused && activeTab === "ProfileScreen" ? "#Fff" : "#212121"
                }
              />
            </View>
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: 70,
    height: 50,
  },
});

export default Home;
