import { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../../../styles/form.style";

const RegisterScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        label="Username"
        leading={(props) => <Icon name="account" {...props} />}
        style={styles.input}
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        label="Email"
        leading={(props) => <Icon name="email" {...props} />}
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        leading={(props) => <Icon name="lock" {...props} />}
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        label="Confirm Password"
        leading={(props) => <Icon name="lock" {...props} />}
        style={styles.input}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button title="submit" style={styles.button} onPress={() => {}} />
    </View>
  );
};

export default RegisterScreen;
