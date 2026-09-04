import { Image, Pressable, Text, View } from 'react-native';
import { Produto } from '@/types/produto';

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
    <View className="flex-row items-center gap-3 bg-slate-100
                     dark:bg-superficie rounded-card p-3 mb-3">
      <Image
        source={{ uri: produto.thumbnail }}
        className="w-16 h-16 rounded-lg bg-slate-200 dark:bg-fundo"
      />

      <View className="flex-1">
        <Text
          className="text-slate-900 dark:text-white text-[15px] font-semibold"
          numberOfLines={2}
        >
          {produto.title}
        </Text>
        <Text className="text-slate-500 dark:text-suave text-xs mt-0.5">
          {produto.brand ?? 'Sem marca'}
        </Text>
        <Text className="text-sky-700 dark:text-destaque text-[17px] mt-1.5">
          R$ {produto.price.toFixed(2)}
        </Text>
      </View>

      <Pressable
        onPress={() => aoAlternarFavorito(produto.id)}
        accessibilityRole="button"
        accessibilityLabel={
          favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
        }
        className="min-w-[44px] min-h-[44px] items-center justify-center
                   active:opacity-60"
      >
        <Text className="text-sky-600 dark:text-destaque text-2xl">
          {favorito ? '★' : '☆'}
        </Text>
      </Pressable>
    </View>
  );
}
