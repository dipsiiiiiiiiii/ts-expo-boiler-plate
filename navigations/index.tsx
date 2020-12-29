import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import RootNavigator from "./RootStackNavigator";

export default function Navigation() {
  return (
    <NavigationContainer
    // linking={LinkingConfiguration}
    // theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
