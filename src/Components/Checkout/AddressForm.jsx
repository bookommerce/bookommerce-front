import { AddressFormStyle } from "./AddressFormStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api.js";
import Input from "../Input/Input";
import Button from "../Button/Button";
import AddressFormSchema from "./AddressFormSchema";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function AddressForm() {
    const { token } = useContext(UserContext);
    const [addresData, setAddresData] = useState({});
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [district, setDistrict] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(AddressFormSchema),
    });
    const onInvalid = (errors) => console.error(errors);

    useEffect(() => {
        api.get('/address', { headers: { Authorization: `${token}` } })
            .then(res => {
                setAddresData(res.data.address);
            })
            .catch(res => console.log(res));
    }, []);

    useEffect(() => {
        setState(addresData.State);
        setCity(addresData.City);
        setAddress(addresData.Address);
        setPostalCode(addresData.PostalCode);
        setDistrict(addresData.District);
    }, [addresData]);

    const submitFormFunctionAddress = async (data) => {
        fetch(`https://viacep.com.br/ws/${data.postalCode}/json/`)
            .then(res => res.json())
            .then(json => console.log(json));

        try
        {
            const response = await api.post("/address", data)
            console.log(response)
            if (response.status === 201)
            {
                setState(response.data.state)
            }
        } catch (error) {
            alert("Erro: " + error)
        }
    }

    return (
        <>
            <h1>Dados de entrega</h1>
            <AddressFormStyle onSubmit={handleSubmit(submitFormFunctionAddress, onInvalid)}>
                <Input register={register("state")} value={state} name="state" type="text" placeholder="UF" errors={errors.state?.message && <p aria-label="error">{errors.state.message}</p>} />
                <Input register={register("city")} name="city" type="text" placeholder="Cidade" errors={errors.city?.message && <p aria-label="error">{errors.city.message}</p>} />
                <Input register={register("address")} name="address" type="text" placeholder="Endereço" errors={errors.address?.message && <p aria-label="error">{errors.address.message}</p>} />
                <Input register={register("district")} name="district" type="text" placeholder="Bairro" errors={errors.district?.message && <p aria-label="error">{errors.district.message}</p>} />
                <Input register={register("postalCode")} name="postalCode" type="text" placeholder="CEP" errors={errors.postalCode?.message && <p aria-label="error">{errors.postalCode.message}</p>} />
                <Button type="submit" text="Cadastrar endereço" />
            </AddressFormStyle>
        </>

    );
}