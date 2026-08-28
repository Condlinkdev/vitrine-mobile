import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cabecalho } from "@/components/Cabecalho";
import { CardProduto } from "@/components/CardProduto";
import { FiltroCategorias } from "@/components/FiltroCategorias";
import { CORES } from "@/constants/tema";
import { PRODUTOS } from "@/constants/produtos";
const CATEGORIAS = ["todas", "beauty", "fragrances", "furniture"];
export function CatalogoScreen() {
  const [categoria, setCategoria] = useState("todas");
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const visiveis =
    categoria === "todas"
      ? PRODUTOS
      : PRODUTOS.filter((p) => p.category === categoria);
  function alternarFavorito(id: number) {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((f) => f !== id) : [...atuais, id],
    );
  }
  useEffect(() => {
    console.log("categoria selecionada:", categoria);
  }, [categoria]);
  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.conteudo}>
        <Cabecalho titulo="Vitrine" favoritos={favoritos.length} />
        <FiltroCategorias
          categorias={CATEGORIAS}
          selecionada={categoria}
          aoSelecionar={setCategoria}
        />
        <ScrollView style={styles.lista} showsVerticalScrollIndicator={false}>
          {visiveis.length === 0 ? (
            <Text style={styles.vazio}>Nenhum produto nesta categoria.</Text>
          ) : (
            visiveis.map((produto) => (
              <CardProduto
                key={produto.id}
                produto={produto}
                favorito={favoritos.includes(produto.id)}
                aoAlternarFavorito={alternarFavorito}
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: CORES.fundo },
  conteudo: { flex: 1, padding: 16 },
  lista: { marginTop: 16 },
  vazio: { color: CORES.textoSuave, textAlign: "center", marginTop: 40 },
});
