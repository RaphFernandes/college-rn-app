import { View, Text} from "react-native";
import { styles } from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>USUÁRIO LOGADO</Text>
      </View>
    </View>
  );
}