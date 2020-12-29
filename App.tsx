import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStackNavigator from "./navigations";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootStackNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
}
