import { ActivityIndicator, Pressable, Text, View } from 'react-native';

export function Carregando({ texto = 'Carregando...' }: { texto?: string }) {
  return (
    <View className="items-center justify-center py-16">
      <ActivityIndicator size="large" color="#0EA5E9" />
      <Text className="text-slate-500 dark:text-suave mt-3">{texto}</Text>
    </View>
  );
}

export function Vazio({ texto }: { texto: string }) {
  return (
    <View className="items-center justify-center py-16 px-6">
      <Text className="text-slate-900 dark:text-white text-base text-center">
        {texto}
      </Text>
    </View>
  );
}

interface ErroProps {
  mensagem: string;
  aoTentarNovamente: () => void;
}

export function Erro({ mensagem, aoTentarNovamente }: ErroProps) {
  return (
    <View className="items-center justify-center py-16 px-6">
      <Text className="text-slate-900 dark:text-white text-base text-center mb-4">
        {mensagem}
      </Text>
      <Pressable
        onPress={aoTentarNovamente}
        accessibilityRole="button"
        className="bg-sky-600 dark:bg-destaque px-5 py-3 rounded-full active:opacity-70"
      >
        <Text className="text-white dark:text-fundo font-bold">Tentar novamente</Text>
      </Pressable>
    </View>
  );
}
