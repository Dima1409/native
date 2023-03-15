import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { RegistrationScreen, LoginScreen } from "./Screens/auth";
import {
  CreatePostScreen,
  Home,
  CommentsScreen,
  MapScreen,
  PostsScreen,
  ProfileScreen,
} from "./Screens/other";

import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        height: 80,
        justifyContent: "center",
        paddingBottom: 34,
        paddingLeft: 80,
        paddingRight: 80,
      },
      headerTitleAlign: "center",
      headerStyle: { height: 88 },
      headerShadowVisible: {
        elevation: 1,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 27,
      },
      headerTitleStyle: {
        fontFamily: "Roboto-Medium",
        marginBottom: 10,
        fontSize: 17,
        lineHeight: 22,
        color: "#212121",
      },
      headerRightContainerStyle: { paddingRight: 16, paddingBottom: 10 },
      headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 10 },
    }}>
      
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused}) => (
            <Ionicons style={{tintColor: focused ? '#212121' : "rgba(33, 33, 33, 0.6)"}} name="grid-outline" size={24} color="rgba(33, 33, 33, 0.6)" />
          ),
          headerShown: true,
          headerTitleStyle: { color: "#212121", fontSize: 17 },
          title: "Публикации",
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
         
          
        }}
        name="Posts"
        component={PostsScreen}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused}) => (
            <AntDesign style={{tintColor: focused ? '#212121' : "rgba(33, 33, 33, 0.6)"}} name="plus" size={24} color="rgba(33, 33, 33, 0.6)" />
          ),
          headerShown: true,
          title: "Создать публикацию",
          tabBarShowLabel: false,
        }}
        
        name="Create"
        component={CreatePostScreen}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused}) => (
            <Feather style={{tintColor: focused ? '#212121' : "rgba(33, 33, 33, 0.6)"}} name="user" size={24} color="rgba(33, 33, 33, 0.6)" />
          ),
          headerShown: false,
          tabBarShowLabel: false
          
        }}
        name="Profile"
        component={ProfileScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default useRoute;
