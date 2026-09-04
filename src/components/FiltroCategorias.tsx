import { Pressable, ScrollView, Text } from 'react-native';

interface FiltroCategoriasProps {
  categorias: string[];
  selecionada: string;
  aoSelecionar: (categoria: string) => void;
}

export function FiltroCategorias({
  categorias,
  selecionada,
  aoSelecionar,
}: FiltroCategoriasProps) {
  return (
    <ScrollView
      horizontal
      className="grow-0"
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="flex-row items-start gap-2 py-1"
    >
      {categorias.map((categoria) => {
        const ativa = categoria === selecionada;
        return (
          <Pressable
            key={categoria}
            onPress={() => aoSelecionar(categoria)}
            accessibilityRole="button"
            accessibilityLabel={`Filtrar por ${categoria}`}
            className={`px-4 py-2.5 rounded-full active:opacity-60 ${
              ativa
                ? 'bg-sky-600 dark:bg-destaque'
                : 'bg-slate-200 dark:bg-superficie'
            }`}
          >
            <Text
              className={
                ativa
                  ? 'text-white dark:text-fundo text-[13px] font-bold'
                  : 'text-slate-600 dark:text-suave text-[13px]'
              }
            >
              {categoria}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
