import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { CORES_NAVEGACAO } from '@/constants/tema';

export default function LayoutAutenticacao() {
  const { colorScheme } = useColorScheme();
  const cores = CORES_NAVEGACAO[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: cores.fundo },
      }}
    />
  );
}
