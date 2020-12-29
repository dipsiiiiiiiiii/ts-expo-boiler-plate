import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOne from "../screens/tabOne";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOne" component={TabOne} />
    </Tab.Navigator>
  );
}
