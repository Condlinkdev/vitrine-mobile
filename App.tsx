import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { CardProduto } from "@/components/CardProduto";
import { CORES } from "@/constants/tema";
import { Produto } from "@/types/produto";

const EXEMPLO: Produto = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description: "Rímel de grande volume.",
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  brand: "Essence",
  category: "beauty",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  images: [],
};
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.tela}>
        <Text style={styles.marca}>Vitrine</Text>
        <CardProduto produto={EXEMPLO} destaque />
        <CardProduto produto={{ ...EXEMPLO, id: 2, title: "Segundo item" }} />
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: CORES.fundo, padding: 16 },
  marca: {
    color: CORES.destaque,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
