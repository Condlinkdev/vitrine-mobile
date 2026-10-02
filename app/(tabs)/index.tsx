import { useCallback, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRouter } from 'expo-router';
import { CardProduto } from '@/components/CardProduto';
import { FiltroCategorias } from '@/components/FiltroCategorias';
import { Carregando, Vazio } from '@/components/EstadosDeLista';
import { PRODUTOS_TESTE } from '@/utils/gerarProdutos';
import { Produto } from '@/types/produto';

const CATEGORIAS = ['todas', 'beauty', 'fragrances', 'furniture'];

// Fora do componente: é criado uma vez só, e não a cada renderização.
function Separador() {
  return <View className="h-3" />;
}

export default function CatalogoScreen() {
  const router = useRouter();
  const [categoria, setCategoria] = useState('todas');
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [carregando] = useState(false); // no encontro 8 vira estado de verdade

  // Só refaz o filtro quando a categoria muda.
  const visiveis = useMemo(
    () =>
      categoria === 'todas'
        ? PRODUTOS_TESTE
        : PRODUTOS_TESTE.filter((p) => p.category === categoria),
    [categoria]
  );

  // A mesma função em todas as renderizações: a lista de dependências
  // é vazia porque o setFavoritos recebe o valor atual como parâmetro.
  const alternarFavorito = useCallback((id: number) => {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((f) => f !== id)
        : [...atuais, id]
    );
  }, []);

  const abrir = useCallback(
    (id: number) => router.push(`/produto/${id}`),
    [router]
  );

  const renderizarItem = useCallback(
    ({ item }: { item: Produto }) => (
      <CardProduto
        produto={item}
        favorito={favoritos.includes(item.id)}
        aoAlternarFavorito={alternarFavorito}
        aoAbrir={abrir}
      />
    ),
    [favoritos, alternarFavorito, abrir]
  );

  // Retorno antecipado sempre DEPOIS de todos os hooks.
  if (carregando) return <Carregando texto="Buscando produtos..." />;

  return (
    <FlatList
      className="flex-1 bg-white dark:bg-fundo"
      contentContainerClassName="p-4"
      data={visiveis}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderizarItem}
      ListHeaderComponent={
        <View className="mb-4">
          <FiltroCategorias
            categorias={CATEGORIAS}
            selecionada={categoria}
            aoSelecionar={setCategoria}
          />
        </View>
      }
      ListEmptyComponent={<Vazio texto="Nenhum produto nesta categoria." />}
      ItemSeparatorComponent={Separador}
      showsVerticalScrollIndicator={false}
      initialNumToRender={8}
      windowSize={10}
    />
  );
}
