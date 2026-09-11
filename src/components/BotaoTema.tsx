import { Pressable, Text } from "react-native";
import { useColorScheme } from "nativewind";
export function BotaoTema() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Pressable
      onPress={toggleColorScheme}
      accessibilityRole="button"
      accessibilityLabel="Alternar tema claro e escuro"
      className="min-w-[44px] min-h-[44px] items-center justify-center mr-2
 active:opacity-60"
    >
      <Text className="text-[20px]">{colorScheme === "dark" ? "☀️" : "🌙"}</Text>
    </Pressable>
  );
}
