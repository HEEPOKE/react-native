import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  function register() {

  }

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
      <TouchableOpacity style={styles.register}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
