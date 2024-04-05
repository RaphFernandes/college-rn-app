import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./pages/Login";
import MainScreen from "./pages/MainScreen";
import AboutUs from "./pages/AboutUs";
import RegisterUsers from "./pages/RegisterUsers";
import ForgotPassword from "./pages/ForgotPassword";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer theme={DefaultTheme}>
      {isLoggedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Receitas" component={MainScreen} />
          <Drawer.Screen name="Sobre Nós" component={AboutUs} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login">
            {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen name="Registrar Usuários" component={RegisterUsers} />
          <Stack.Screen name="Esqueci Minha Senha" component={ForgotPassword} />
        </Stack.Navigator>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
