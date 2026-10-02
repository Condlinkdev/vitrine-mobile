import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CampoTexto } from '@/components/CampoTexto';
import { DadosLogin, esquemaLogin } from '@/validacao/login';

export default function LoginScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<DadosLogin>({
    defaultValues: { usuario: '', senha: '' },
    resolver: yupResolver(esquemaLogin),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  async function aoEnviar(dados: DadosLogin) {
    // simulação: no encontro 9, isto vira a chamada à API
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (dados.usuario !== 'emilys' || dados.senha !== 'emilyspass') {
      // mensagem genérica: não revele qual dos dois estava errado
      setError('root', { message: 'Usuário ou senha incorretos.' });
      return;
    }

    console.log('autenticado:', dados.usuario);
    router.replace('/');
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white dark:bg-fundo"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center p-6"
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-sky-700 dark:text-destaque text-3xl font-bold mb-1">
          Vitrine
        </Text>
        <Text className="text-slate-500 dark:text-suave text-sm mb-8">
          Entre para ver seus favoritos.
        </Text>

        {errors.root ? (
          <View
            className="bg-red-50 dark:bg-alerta/20 border border-red-600
                       dark:border-alerta rounded-lg p-3 mb-4"
          >
            <Text className="text-red-700 dark:text-alerta text-sm">
              {errors.root.message}
            </Text>
          </View>
        ) : null}

        <CampoTexto
          control={control}
          name="usuario"
          rotulo="Usuário"
          erro={errors.usuario?.message}
          placeholder="ex.: emilys"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="username"
        />

        <CampoTexto
          control={control}
          name="senha"
          rotulo="Senha"
          erro={errors.senha?.message}
          placeholder="mínimo de 6 caracteres"
          secureTextEntry
          autoComplete="password"
        />

        <Pressable
          onPress={handleSubmit(aoEnviar)}
          disabled={isSubmitting}
          accessibilityRole="button"
          accessibilityState={{ disabled: isSubmitting }}
          className={`rounded-full py-4 items-center mt-2 ${
            isSubmitting
              ? 'bg-slate-200 dark:bg-superficie'
              : 'bg-sky-600 dark:bg-destaque active:opacity-80'
          }`}
        >
          <Text
            className={`font-bold ${
              isSubmitting
                ? 'text-slate-500 dark:text-suave'
                : 'text-white dark:text-fundo'
            }`}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
