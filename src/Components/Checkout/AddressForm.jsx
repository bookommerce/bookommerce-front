import { AddressFormStyle } from "./AddressFormStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api.js";
import Input from "../Input/Input";
import Button from "../Button/Button";
import AddressFormSchema from "./AddressFormSchema";

export default function AddressForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(AddressFormSchema),
    });
    const onInvalid = (errors) => console.error(errors);

    const submitFormFunctionAddress = async (data) => {
        fetch(`https://viacep.com.br/ws/${data.postalCode}/json/`)
            .then(res => res.json())
            .then(json => console.log(json));

        // try
        // {
        //     const response = await api.post("/address", data)
        //     console.log(response)
        //     if (response.status === 201) {
        //     }
        // } catch (error) {
        //     alert("Erro: " + error)
        // }
    }

    return (
        <AddressFormStyle onSubmit={handleSubmit(submitFormFunctionAddress, onInvalid)}>
            <Input register={register("state")} name="state" type="text" placeholder="UF" errors={errors.state?.message && <p aria-label="error">{errors.state.message}</p>} />
            <Input register={register("city")} name="city" type="text" placeholder="Cidade" errors={errors.city?.message && <p aria-label="error">{errors.city.message}</p>} />
            <Input register={register("address")} name="address" type="text" placeholder="Endereço" errors={errors.address?.message && <p aria-label="error">{errors.address.message}</p>} />
            <Input register={register("postalCode")} name="postalCode" type="text" placeholder="CEP" errors={errors.postalCode?.message && <p aria-label="error">{errors.postalCode.message}</p>} />
            <Button type="submit" text="Cadastrar endereço" />
        </AddressFormStyle>
    );
}