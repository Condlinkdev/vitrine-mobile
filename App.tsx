import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CatalogoScreen } from "@/screens/CatalogoScreen";
export default function App() {
  return (
    <SafeAreaProvider>
      <CatalogoScreen />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
