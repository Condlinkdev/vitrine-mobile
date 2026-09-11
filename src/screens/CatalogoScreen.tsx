import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Cabecalho } from '@/components/Cabecalho';
import { CardProduto } from '@/components/CardProduto';
import { FiltroCategorias } from '@/components/FiltroCategorias';
import { PRODUTOS } from '@/constants/produtos';

const CATEGORIAS = ['todas', 'beauty', 'fragrances', 'furniture'];

export function CatalogoScreen() {
  const [categoria, setCategoria] = useState('todas');
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const visiveis =
    categoria === 'todas'
      ? PRODUTOS
      : PRODUTOS.filter((p) => p.category === categoria);

  function alternarFavorito(id: number) {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((f) => f !== id)
        : [...atuais, id]
    );
  }

  useEffect(() => {
    console.log('categoria selecionada:', categoria);
  }, [categoria]);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-fundo">
      <View className="flex-1 p-4">
        <Cabecalho titulo="Vitrine" favoritos={favoritos.length} />

        <FiltroCategorias
          categorias={CATEGORIAS}
          selecionada={categoria}
          aoSelecionar={setCategoria}
        />

        <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
          {visiveis.length === 0 ? (
            <Text className="text-slate-500 dark:text-suave text-center mt-10">
              Nenhum produto nesta categoria.
            </Text>
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
