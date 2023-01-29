import * as yup from "yup"

const signinSchema = yup.object().shape({
    email: yup
        .string()
        .required("O email é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória.")
})

export default signinSchema;