import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupPageStyle, FormSignupPage } from "./SignupPageStyles.js"
import { ThreeDots } from "react-loader-spinner"
import signupSchema from "./SignupPageSchema.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api.js";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

const SignupPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),
    })
    const onInvalid = (errors) => console.error(errors)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)    

    const submitFormFunctionSignup = async (data) => {
        console.log(data)
        setLoading(true)
        setDisabled(true)
        try {
            const response = await api.post(`/signup`, data)
            if (response.status === 201) {
                setLoading(false)
                setDisabled(false)
                navigate("/")
            }
        } catch (error) {
            alert("Erro: " + error)
            setLoading(false)
            setDisabled(false)
        }
    }

    if (loading) {
        return (
            <SignupPageStyle>
                <h1>Crie sua conta</h1>
                <FormSignupPage method="POST" onSubmit={handleSubmit(submitFormFunctionSignup, onInvalid)}>

                    <Input register={register("name")} type="text" name="name" id="nameSignup" placeholder="Nome" disabled={disabled} errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />

                    <Input register={register("email")} type="email" name="email" id="emailSignup" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input register={register("password")} type="text" name="password" id="passwordSignup" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

                    <Input register={register("passwordConfirm")} type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirme a senha" disabled={disabled} errors={errors.passwordConfirm?.message && <p aria-label="error">{errors.passwordConfirm.message}</p>} />

                    <Input register={register("address")} type="text" name="address" id="address" placeholder="Endereço" disabled={disabled} errors={errors.address?.message && <p aria-label="error">{errors.address.message}</p>} />

                    <Button type="submit" text={
                        <ThreeDots
                            height="60"
                            width="60"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />}
                        disabled={disabled} />
                </FormSignupPage>
                <span>
                    <Link to={"/"}>
                        <span>Faça login </span>
                    </Link>
                    com sua conta
                </span>
            </SignupPageStyle>
        )
    } else {
        return (
            <SignupPageStyle>
                <h1>Cadastre-se</h1>
                <FormSignupPage method="POST" onSubmit={handleSubmit(submitFormFunctionSignup, onInvalid)}>

                    <Input register={register("name")} type="text" name="name" id="nameSignup" placeholder="Nome" disabled={disabled} errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />

                    <Input register={register("email")} type="email" name="email" id="emailSignup" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input register={register("password")} type="password" name="password" id="passwordSignup" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

                    <Input register={register("passwordConfirm")} type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirme a senha" disabled={disabled} errors={errors.passwordConfirm?.message && <p aria-label="error">{errors.passwordConfirm.message}</p>} />

                    <Input register={register("address")} type="text" name="address" id="address" placeholder="Endereço" disabled={disabled} errors={errors.address?.message && <p aria-label="error">{errors.address.message}</p>} />

                    <Button type="submit" text="Cadastre-se" disabled={disabled} />
                </FormSignupPage>
                <span>
                    <Link to={"/"}>
                        <span>Faça login </span>
                    </Link>
                    com sua conta
                </span>
            </SignupPageStyle>
        )
    }
}

export default SignupPage;