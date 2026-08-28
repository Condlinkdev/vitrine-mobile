import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { CORES } from "@/constants/tema";
interface FiltroCategoriasProps {
  categorias: string[];
  selecionada: string;
  aoSelecionar: (categoria: string) => void;
}
export function FiltroCategorias({
  categorias,
  selecionada,
  aoSelecionar,
}: FiltroCategoriasProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.linha}
    >
      {categorias.map((categoria) => {
        const ativa = categoria === selecionada;
        return (
          <Pressable
            key={categoria}
            onPress={() => aoSelecionar(categoria)}
            accessibilityRole="button"
            accessibilityLabel={`Filtrar por ${categoria}`}
            style={[styles.chip, ativa && styles.chipAtivo]}
          >
            <Text style={[styles.texto, ativa && styles.textoAtivo]}>
              {categoria}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  linha: { flexDirection: "row", gap: 8, paddingVertical: 4 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: CORES.superficie,
  },
  chipAtivo: { backgroundColor: CORES.destaque },
  texto: { color: CORES.textoSuave, fontSize: 13 },
  textoAtivo: { color: CORES.fundo, fontWeight: "bold" },
});
