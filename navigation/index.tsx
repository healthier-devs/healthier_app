import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import Login from "../src/pages/Login";

const HealthierNavigation = () => {
  const Stack = createNativeStackNavigator();

  const customStackNavigationOptionsWithoutHeader: NativeStackNavigationOptions =
    {
      headerShown: false,
      gestureEnabled: false,
    };

  const customStackNavigationOptionsWithHeader: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: "#131416",
    },
    headerTitleAlign: "center",
    headerBackVisible: true,
    headerTitle(props) {
      return (
        <View
          style={{
            height: 24,
          }}>
          <Image
            source={require("../src/assets/image/logo/header_logo.png")}
            style={{ height: "100%", width: 140, resizeMode: "contain" }}
          />
        </View>
      );
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group screenOptions={customStackNavigationOptionsWithHeader}>
          <></>
        </Stack.Group>
        <Stack.Group screenOptions={customStackNavigationOptionsWithoutHeader}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HealthierNavigation;
