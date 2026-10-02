import * as yup from 'yup';

export const esquemaCadastro = yup.object({
  nome: yup
    .string()
    .required('Informe seu nome')
    .min(3, 'Escreva o nome com ao menos 3 letras'),
  email: yup
    .string()
    .required('Informe o e-mail')
    .email('Digite um e-mail válido, como voce@exemplo.com'),
  senha: yup
    .string()
    .required('Crie uma senha')
    .min(6, 'A senha precisa de ao menos 6 caracteres'),
  confirmacao: yup
    .string()
    .required('Repita a senha')
    .oneOf([yup.ref('senha')], 'As senhas não conferem'),
});

export type DadosCadastro = yup.InferType<typeof esquemaCadastro>;
