import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import AddDataScreen from "src/screens/AddDataScreen";
import ViewDeleteDataScreen from "src/screens/ViewDeleteDataScreen";

const AppNavigation = () => {
  const appStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <appStack.Navigator initialRouteName="AddDataScreen">
        <appStack.Screen
          name="AddDataScreen"
          component={AddDataScreen}
          options={{
            headerTitleAlign: "center",
            title: "Add Data",
            animationTypeForReplace: "push",
            animation: "fade_from_bottom",
          }}
        />
        <appStack.Screen
          name="ViewDeleteDataScreen"
          component={ViewDeleteDataScreen}
          options={{
            headerTitleAlign: "center",
            title: "View Data",
            animationTypeForReplace: "push",
            animation: "fade_from_bottom",
          }}
        />
      </appStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
