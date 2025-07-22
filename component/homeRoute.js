import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/home"; // Keep the correct import
import Setting from "../screen/setting";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Setting} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeDrawer">
        <Drawer.Screen name="HomeDrawer" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
