import { Image, ScrollView, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { PRODUTOS } from '@/constants/produtos';

export default function DetalheProduto() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // parâmetro de rota é sempre texto — converta antes de comparar
  const produto = PRODUTOS.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <View className="flex-1 bg-white dark:bg-fundo items-center justify-center p-4">
        <Text className="text-slate-900 dark:text-white text-center">
          Produto não encontrado.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-fundo">
      <Stack.Screen options={{ title: produto.title }} />

      <Image
        source={{ uri: produto.thumbnail }}
        className="w-full h-64 bg-slate-100 dark:bg-superficie"
        resizeMode="contain"
      />

      <View className="p-4">
        <Text className="text-slate-900 dark:text-white text-2xl font-bold">
          {produto.title}
        </Text>
        <Text className="text-slate-500 dark:text-suave text-sm mt-1">
          {produto.brand ?? 'Sem marca'} · {produto.category}
        </Text>
        <Text className="text-sky-700 dark:text-destaque text-3xl mt-4">
          R$ {produto.price.toFixed(2)}
        </Text>
        <Text className="text-slate-600 dark:text-suave text-base mt-4 leading-6">
          {produto.description}
        </Text>
        <Text className="text-slate-500 dark:text-suave text-xs mt-4">
          {produto.stock} em estoque · nota {produto.rating}
        </Text>
      </View>
    </ScrollView>
  );
}
