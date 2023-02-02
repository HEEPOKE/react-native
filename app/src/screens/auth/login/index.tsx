import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    width: "80%",
    marginTop: 20,
  },
  register: {
    marginTop: 20,
  },
  registerText: {
    color: "#333",
  },
});

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="contained" style={styles.button} onPress={() => {}}>
        Login
      </Button>
      <Button mode="text" onPress={() => navigation.navigate("Register")}>
        Don't have an account? Go to Register
      </Button>
    </View>
  );
};

export default LoginScreen;
