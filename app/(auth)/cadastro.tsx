import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CampoTexto } from '@/components/CampoTexto';
import { DadosCadastro, esquemaCadastro } from '@/validacao/cadastro';

export default function CadastroScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DadosCadastro>({
    defaultValues: { nome: '', email: '', senha: '', confirmacao: '' },
    resolver: yupResolver(esquemaCadastro),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  async function aoEnviar(dados: DadosCadastro) {
    // simulação: a API de exemplo não tem cadastro de verdade
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (dados.email === 'emily.johnson@x.dummyjson.com') {
      // erro do servidor que pertence a um campo específico
      setError('email', { message: 'Este e-mail já tem cadastro.' });
      return;
    }

    console.log('cadastrado:', dados.nome, dados.email);
    reset();
    router.replace('/login');
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
          Criar conta
        </Text>
        <Text className="text-slate-500 dark:text-suave text-sm mb-8">
          Leva menos de um minuto.
        </Text>

        <CampoTexto
          control={control}
          name="nome"
          rotulo="Nome"
          erro={errors.nome?.message}
          placeholder="como devemos chamar você"
          autoComplete="name"
        />
        <CampoTexto
          control={control}
          name="email"
          rotulo="E-mail"
          erro={errors.email?.message}
          placeholder="voce@exemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <CampoTexto
          control={control}
          name="senha"
          rotulo="Senha"
          erro={errors.senha?.message}
          placeholder="mínimo de 6 caracteres"
          secureTextEntry
        />
        <CampoTexto
          control={control}
          name="confirmacao"
          rotulo="Confirme a senha"
          erro={errors.confirmacao?.message}
          placeholder="a mesma senha de cima"
          secureTextEntry
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
            {isSubmitting ? 'Criando conta...' : 'Criar conta'}
          </Text>
        </Pressable>

        <Link
          href="/login"
          replace
          className="text-sky-700 dark:text-destaque text-center mt-6"
        >
          Já tenho conta
        </Link>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
