import { View, Text, TextInput } from "react-native";
import { styles } from "../styles";

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}