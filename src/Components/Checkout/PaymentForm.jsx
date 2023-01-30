import PaymentFormSchema from "./PaymentFormSchema";
import { PaymentFormStyle } from "./PaymentFormStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api.js";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function PaymentForm({setPayment}) {
    const { token } = useContext(UserContext);
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [validity, setValidity] = useState("");
    const [cvc, setCvc] = useState("");
    const [paymentData, setPaymentData] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(PaymentFormSchema),
    });
    const onInvalid = (errors) => console.error(errors);

    useEffect(() => {
        api.get('/payment', { headers: { Authorization: `${token}` } })
            .then(res => {
                setPaymentData(res.data.payment);
            })
            .catch(res => console.log(res));
    }, []);

    useEffect(() => {
        if (paymentData)
        {
            setNumber(paymentData.Number);
            setName(paymentData.Name);
            setValidity(paymentData.Validity);
            setCvc(paymentData.Cvc);
        }
    }, [paymentData]);

    const submitFormFunctionPayment = async (data) => {
        console.log(data);
        try
        {
            const response = await api.post("/payment", { payment: data}, { headers: { Authorization: `${token}` } })
            console.log(response)
            if (response.status === 201)
            {
                setPayment(data);
            }
        } catch (error)
        {
            alert("Erro: " + error)
        }
    }

    return (
        <PaymentFormStyle onSubmit={handleSubmit(submitFormFunctionPayment, onInvalid)}>
            <Input register={register("name")} name="name" type="text" placeholder="Nome" errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />
            <Input register={register("number")} name="number" type="text" placeholder="Número do cartão" errors={errors.number?.message && <p aria-label="error">{errors.number.message}</p>} />
            <Input register={register("validity")} name="validity" type="text" placeholder="Validade" errors={errors.validity?.message && <p aria-label="error">{errors.validity.message}</p>} />
            <Input register={register("cvc")} name="cvc" type="number" placeholder="CVC" errors={errors.cvc?.message && <p aria-label="error">{errors.cvc.message}</p>} />
            <Button type="submit" text="Cadastrar cartão" />
        </PaymentFormStyle>
    );
}