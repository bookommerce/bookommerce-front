import * as yup from "yup"

const PaymentFormSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório.")
        .min(2, "O nome deve ter pelo menos 2 caracteres!")
        .max(50, "O nome deve ter no máximo 50 caracteres!"),
    number: yup
        .string()
        .required("O número é obrigatório.")
        .matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/, "Deve ser um número válido!"),
    validity: yup
        .string()
        .required("A validade é obrigatória.")
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Deve ser uma data correta"),
    cvc: yup
        .string()
        .required("O CVC é obrigatório.")
        .min(3, "Deve ser um CVC válido")
        .max(3, "Deve ser um CVC válido")
})

export default PaymentFormSchema;