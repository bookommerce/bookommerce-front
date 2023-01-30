import * as yup from "yup"

const CartPageSchema = yup.object().shape({
    postalCode: yup
        .string()
        .required("O CEP é obrigatório.")
        .matches(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/, "Deve ser um CEP válido"),
});

export default CartPageSchema;