import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useColorScheme } from 'nativewind';
import { CORES_NAVEGACAO } from '@/constants/tema';

interface CampoTextoProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  rotulo: string;
  erro?: string;
}

export function CampoTexto<T extends FieldValues>({
  control,
  name,
  rotulo,
  erro,
  ...resto
}: CampoTextoProps<T>) {
  const { colorScheme } = useColorScheme();
  const cores = CORES_NAVEGACAO[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <View className="mb-4">
      <Text className="text-slate-600 dark:text-suave text-xs mb-1.5">
        {rotulo}
      </Text>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholderTextColor={cores.inativo}
            accessibilityLabel={rotulo}
            accessibilityHint={erro}
            className={`bg-slate-100 dark:bg-superficie text-slate-900 dark:text-white
                        rounded-lg px-4 py-3.5 border ${
                          erro
                            ? 'border-red-600 dark:border-alerta'
                            : 'border-transparent'
                        }`}
            {...resto}
          />
        )}
      />

      {erro ? (
        <Text className="text-red-700 dark:text-alerta text-xs mt-1.5">
          {erro}
        </Text>
      ) : null}
    </View>
  );
}
