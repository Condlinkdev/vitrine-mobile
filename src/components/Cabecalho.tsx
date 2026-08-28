import { StyleSheet, Text, View } from "react-native";
import { CORES } from "@/constants/tema";
interface CabecalhoProps {
  titulo: string;
  favoritos: number;
}
export function Cabecalho({ titulo, favoritos }: CabecalhoProps) {
  return (
    <View style={styles.linha}>
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.selo}>
        <Text style={styles.seloTexto}>{favoritos} favoritos</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  titulo: { color: CORES.destaque, fontSize: 26, fontWeight: "bold", flex: 1 },
  selo: {
    backgroundColor: CORES.superficie,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  seloTexto: { color: CORES.texto, fontSize: 12 },
});
