import { Link, useNavigate } from "react-router-dom";
import { SigninPageStyle, FormSigninPage } from "./SigninPageStyles.js"
import { ThreeDots } from "react-loader-spinner"
import signinSchema from "./SigninPageSchema.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api.js";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import Input from "../Input/Input.jsx"
import Button from "../Button/Button.jsx"

const SigninPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signinSchema),
    })
    const onInvalid = (errors) => console.error(errors)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const { setUser, setToken } = useContext(UserContext)

    const submitFormFunctionSignin = async (data) => {

        setLoading(true)
        setDisabled(true)
        try {
            const response = await api.post("/signin", data)
            if (response.status === 200) {
                setLoading(false)
                setDisabled(false)
                setUser({
                    id: response.data.id,
                    name: response.data.name
                })
                setToken(response.data.token)
                navigate("/home")
            }
        } catch (error) {
            alert("Erro: " + error)
            setLoading(false)
            setDisabled(false)
        }
    }

    if (loading) {
        return (
            <SigninPageStyle>
                <h1>Login</h1>
                <FormSigninPage method="POST" onSubmit={handleSubmit(submitFormFunctionSignin, onInvalid)}>

                    <Input register={register("email")} type="email" name="email" id="emailSignin" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input register={register("password")} type="password" name="password" id="passwordSignin" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

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
                </FormSigninPage>
                <span>
                    <span>Não tem uma conta? </span>
                    <Link to={"/signup"}>
                        Cadastre-se
                    </Link>
                </span>
            </SigninPageStyle>
        )
    } else {
        return (
            <SigninPageStyle>
                <h1>Login</h1>
                <FormSigninPage method="POST" onSubmit={handleSubmit(submitFormFunctionSignin, onInvalid)}>

                    <Input register={register("email")} type="email" name="email" id="emailSignin" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input register={register("password")} type="password" name="password" id="passwordSignin" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

                    <Button type="submit" text="Login" disabled={disabled} />
                </FormSigninPage>
                <span>
                    <span>Não tem uma conta? </span>
                    <Link to={"/signup"}>
                        Cadastre-se
                    </Link>
                </span>
            </SigninPageStyle>
        )
    }
}

export default SigninPage;