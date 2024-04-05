import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Link } from "@react-navigation/native";
import Input from "../components/Input";
import { styles } from "../styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (value) => {
    if (errorMessage?.toLowerCase()?.includes("e-mail")) {
      setErrorMessage("");
    }

    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    if (errorMessage?.toLowerCase()?.includes("senha")) {
      setErrorMessage("");
    }

    setPassword(value);
  };

  const handleLoginButton = () => {
    
    if (!email) {
        setErrorMessage("E-mail não pode estar vazio");
        return;
      }
  
      if (!password) {
        setErrorMessage("Senha não pode estar vazia");
        return;
      }
  
    Alert.alert("Login bem sucedido");
    setEmail("");
    setPassword("");

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      </View>

      <Input
        label="E-mail"
        placeholder="lorem@ipsum"
        value={email}
        onChange={handleEmailChange}
      />

      <Input
        label="Senha"
        placeholder="********"
        value={password}
        onChange={handlePasswordChange}
        secureTextEntry
      />

      <View style={styles.wrapper}>
        <Link style={styles.link} to="/ForgotPassword">
          Esqueci minha senha.
        </Link>
      </View>

      <View style={styles.wrapper}>
        <Link style={styles.link} to="/Register">
          Cadastre-se
        </Link>
      </View>

      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLoginButton}
          accessibilityLabel="Botão para entrar com sua conta"
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}