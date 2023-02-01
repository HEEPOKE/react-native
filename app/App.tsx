import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation";
import LoginScreen from "./src/screens/auth/login";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <LoginScreen /> */}
      <AppNavigator />
    </SafeAreaProvider>
  );
}
