import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function FavoritosScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-fundo p-4 items-center justify-center">
      <Text className="text-slate-900 dark:text-white text-lg text-center">
        Você ainda não tem favoritos.
      </Text>
      <Text className="text-slate-500 dark:text-suave text-sm text-center mt-2">
        Marque produtos com a estrela no catálogo.
      </Text>

      <Link href="/" className="text-sky-700 dark:text-destaque mt-6">
        Ir para o catálogo
      </Link>
    </View>
  );
}
