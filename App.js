import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterUsers from "./pages/RegisterUsers";
import ForgotPassword from "./pages/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ title: "Login" }}
          component={Login}
        />

        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={Home}
        />

        <Stack.Screen
          name="Register"
          options={{ title: "Cadastrar usuário" }}
          component={RegisterUsers}
        />

        <Stack.Screen
          name="ForgotPassword"
          options={{ title: "Recupere sua senha" }}
          component={ForgotPassword}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}