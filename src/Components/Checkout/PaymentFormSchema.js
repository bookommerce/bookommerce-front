import * as yup from "yup"

const PaymentFormSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório.")
        .min(2, "O nome deve ter pelo menos 2 caracteres!")
        .max(50, "O nome deve ter no máximo 50 caracteres!"),
    number: yup
        .string()
        .required("A cidade é obrigatória")
        .min(3, "A cidade deve ter no mínimo 3 caracteres!"),
    validity: yup
        .string()
        .required("A validade é obrigatória.")
        .min(4, "O nome deve ter pelo menos 5 caracteres!")
        .matches(/(?=.*?[0-9])/, "A senha deve ter no mínimo 1 número"),
    cvc: yup
        .number()
        .required("O CVC é obrigatório.")
        .min(3, "Deve ser um CVC válido")
        .max(3, "Deve ser um CVC válido")
})

export default PaymentFormSchema;