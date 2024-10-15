import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation";
import ProductNavigation from "./src/navigation/ProductNavigation";
import AuthNavigation from "./src/navigation/AuthNavigation";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={{ flex: 1 }}>
            <MainNavigation />
          </SafeAreaView>
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
