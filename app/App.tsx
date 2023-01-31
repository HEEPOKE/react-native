import { StyleSheet, View } from "react-native";
import LoginScreen from "./src/screens/auth/login";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      margin: 0,
      padding: 0,
    },
  });

  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}
