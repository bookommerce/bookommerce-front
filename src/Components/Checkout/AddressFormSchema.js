import * as yup from "yup"

const AddressFormSchema = yup.object().shape({
    state: yup
        .string()
        .required("O estado é obrigatório.")
        .min(2, "O nome deve ter pelo menos 2 caracteres!")
        .max(2, "O nome deve ter no máximo 2 caracteres!"),
    city: yup
        .string()
        .required("A cidade é obrigatória")
        .min(3, "A cidade deve ter no mínimo 3 caracteres!"),
    address: yup
        .string()
        .required("O endereço é obrigatório.")
        .min(5, "O nome deve ter pelo menos 5 caracteres!")
        .matches(/(?=.*?[0-9])/, "A senha deve ter no mínimo 1 número"),
    district: yup
        .string()
        .required("O bairro é obrigatório."),
    postalCode: yup
        .string()
        .required("Você deve confirmar sua senha.")
        .matches(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/, "Deve ser um CEP válido"),
});

export default AddressFormSchema;