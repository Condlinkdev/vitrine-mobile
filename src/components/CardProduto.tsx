                                                                                                                                                                                import { StyleSheet, Text, View } from 'react-native';
import { CORES } from '@/constants/tema';
import { Produto } from '@/types/produto';
interface CardProdutoProps {
 produto: Produto;
 destaque?: boolean;
}
export function CardProduto({
 produto,
 destaque = false,
}: CardProdutoProps) {
 return (
 <View style={[styles.card, destaque && styles.cardDestaque]}>
 <Text style={styles.titulo}>{produto.title}</Text>
 <Text style={styles.categoria}>{produto.category}</Text>
 <Text style={styles.preco}>
 R$ {produto.price.toFixed(2)}
 </Text>
 </View>
 );
}
const styles = StyleSheet.create({
 card: {
 backgroundColor: CORES.superficie,
 borderRadius: 12,
 padding: 16,
 marginBottom: 12,
 },
 cardDestaque: { borderWidth: 2, borderColor: CORES.destaque },
 titulo: { color: CORES.texto, fontSize: 17, fontWeight: '600' },
 categoria: { color: CORES.textoSuave, fontSize: 12, marginTop: 2 },
 preco: { color: CORES.destaque, fontSize: 20, marginTop: 8 },
});
                                                                                                      