import { Pressable, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

interface CabecalhoProps {
  titulo: string;
  favoritos: number;
}

export function Cabecalho({ titulo, favoritos }: CabecalhoProps) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center justify-between gap-2 mb-4">
      <Text className="flex-1 text-sky-700 dark:text-destaque text-[26px] font-bold">
        {titulo}
      </Text>

      <View className="bg-slate-200 dark:bg-superficie rounded-full px-2.5 py-1.5">
        <Text className="text-slate-900 dark:text-white text-xs">
          {favoritos} favoritos
        </Text>
      </View>

      <Pressable
        onPress={toggleColorScheme}
        accessibilityRole="button"
        accessibilityLabel="Alternar tema claro e escuro"
        className="min-w-[44px] min-h-[44px] items-center justify-center active:opacity-60"
      >
        <Text className="text-[20px]">
          {colorScheme === 'dark' ? '☀️' : '🌙'}
        </Text>
      </Pressable>
    </View>
  );
}
