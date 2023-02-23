import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation";
import 'dotenv/config';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
