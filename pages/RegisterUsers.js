import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Input from "../components/Input";
import { styles } from "../styles";

const INITIAL_VALUES = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterUsers({ navigation }) {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (field, value) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const handleRegister = () => {
    setValues(INITIAL_VALUES);

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Input
        label="Nome"
        placeholder="José"
        value={values.name}
        onChange={(text) => handleChange("name", text)}
      />

      <Input
        label="Sobrenome"
        placeholder="Silva"
        value={values.lastName}
        onChange={(text) => handleChange("lastName", text)}
      />

      <Input
        label="E-mail"
        placeholder="lorem@ipsum.com"
        value={values.email}
        onChange={(text) => handleChange("email", text)}
      />

      <Input
        label="Senha"
        placeholder="********"
        value={values.password}
        onChange={(text) => handleChange("password", text)}
        secureTextEntry
      />

      <Input
        label="Confirme sua senha"
        placeholder="********"
        value={values.confirmPassword}
        onChange={(text) => handleChange("confirmPassword", text)}
        secureTextEntry
      />

      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          accessibilityLabel="Botão para cadastrar novo usuário"
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}