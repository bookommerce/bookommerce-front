import PaymentFormSchema from "./PaymentFormSchema";
import { PaymentFormStyle } from "./PaymentFormStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api.js";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function PaymentForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(PaymentFormSchema),
    });
    const onInvalid = (errors) => console.error(errors);

    const submitFormFunctionPayment = async (data) => {
        try {
            const response = await api.post("/payment", data)
            console.log(response)
            if (response.status === 201) {
            }
        } catch (error) {
            alert("Erro: " + error)
        }
    }

    return (
        <PaymentFormStyle onSubmit={handleSubmit(submitFormFunctionPayment, onInvalid)}>
            <Input register={register("name")} name="name" type="text" placeholder="Nome" errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />
            <Input register={register("number")} name="number" type="text" placeholder="Número do cartão" errors={errors.city?.number && <p aria-label="error">{errors.city.number}</p>} />
            <Input register={register("validity")} name="validity" type="date" placeholder="Validade" errors={errors.validity?.message && <p aria-label="error">{errors.validity.message}</p>} />
            <Input register={register("cvc")} name="cvc" type="number" placeholder="CVC" errors={errors.cvc?.message && <p aria-label="error">{errors.cvc.message}</p>} />
            <Button type="submit" text="Cadastrar cartão" />
        </PaymentFormStyle>
    );
}