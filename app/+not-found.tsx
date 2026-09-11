import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NaoEncontrado() {
  return (
    <View className="flex-1 bg-white dark:bg-fundo items-center justify-center p-6">
      <Stack.Screen options={{ title: 'Ops' }} />
      <Text className="text-slate-900 dark:text-white text-lg text-center">
        Esta tela não existe.
      </Text>
      <Link href="/" className="text-sky-700 dark:text-destaque mt-4">
        Voltar ao catálogo
      </Link>
    </View>
  );
}
