import * as yup from "yup"

const AddressFormSchema = yup.object().shape({
    State: yup
        .string()
        .required("O estado é obrigatório.")
        .min(2, "O nome deve ter pelo menos 2 caracteres!")
        .max(2, "O nome deve ter no máximo 2 caracteres!"),
    City: yup
        .string()
        .required("A cidade é obrigatória")
        .min(3, "A cidade deve ter no mínimo 3 caracteres!"),
    Address: yup
        .string()
        .required("O endereço é obrigatório.")
        .matches(/(?=.*?[0-9])/, "A senha deve ter no mínimo 1 número"),
    // Number: yup
    //     .number()
    //     .required("O numero é obrigatório."),
    District: yup
        .string()
        .required("O bairro é obrigatório."),
    PostalCode: yup
        .string()
        .required("O CEP é obrigatório.")
        .matches(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/, "Deve ser um CEP válido"),
});

export default AddressFormSchema;