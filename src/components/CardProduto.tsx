import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { CORES } from "@/constants/tema";
import { Produto } from "@/types/produto";
interface CardProdutoProps {
  produto: Produto;
  favorito: boolean;
  aoAlternarFavorito: (id: number) => void;
}
export function CardProduto({
  produto,
  favorito,
  aoAlternarFavorito,
}: CardProdutoProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: produto.thumbnail }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.titulo} numberOfLines={2}>
          {produto.title}
        </Text>
        <Text style={styles.marca}>{produto.brand ?? "Sem marca"}</Text>
        <Text style={styles.preco}>R$ {produto.price.toFixed(2)}</Text>
      </View>
      <Pressable
        onPress={() => aoAlternarFavorito(produto.id)}
        accessibilityRole="button"
        accessibilityLabel={
          favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
        style={styles.botao}
      >
        <Text style={styles.estrela}>{favorito ? "★" : "☆"}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: CORES.superficie,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  imagem: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: "#0B1220",
  },
  info: { flex: 1 },
  titulo: { color: CORES.texto, fontSize: 15, fontWeight: "600" },
  marca: { color: CORES.textoSuave, fontSize: 12, marginTop: 2 },
  preco: { color: CORES.destaque, fontSize: 17, marginTop: 6 },
  botao: {
    minWidth: 44,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  estrela: { color: CORES.destaque, fontSize: 24 },
});
