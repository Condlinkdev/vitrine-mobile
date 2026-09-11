import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { CardProduto } from '@/components/CardProduto';
import { FiltroCategorias } from '@/components/FiltroCategorias';
import { PRODUTOS } from '@/constants/produtos';

const CATEGORIAS = ['todas', 'beauty', 'fragrances', 'furniture'];

export default function CatalogoScreen() {
  const router = useRouter();
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

  return (
    <View className="flex-1 bg-white dark:bg-fundo p-4">
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
              aoAbrir={() => router.push(`/produto/${produto.id}`)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}
