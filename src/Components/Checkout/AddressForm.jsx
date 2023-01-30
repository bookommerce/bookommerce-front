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
    const [addressData, setAddressData] = useState({});
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [district, setDistrict] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(AddressFormSchema),
    });
    const onInvalid = (errors) => console.error(errors);

    useEffect(() => {
        api.get('/address', { headers: { Authorization: `${token}` } })
            .then(res => {
                setAddressData(res.data.address);
            })
            .catch(res => console.log(res));
    }, []);

    useEffect(() => {
        setState(addressData.State);
        setCity(addressData.City);
        setAddress(addressData.Address);
        setPostalCode(addressData.PostalCode);
        setDistrict(addressData.District);
    }, [addressData]);

    const submitFormFunctionAddress = async (data) => {
        console.log(data)
        fetch(`https://viacep.com.br/ws/${data.postalCode}/json/`)
            .then(res => res.json())
            .then(json => console.log(json));

        try
        {
            const response = await api.post("/address", data)
            console.log(response)
            if (response.status === 201)
            {
                setState(response.data.State);
                setCity(response.data.City)
            }
        } catch (error) {
            alert("Erro: " + error)
        }
    }

    return (
        <>
            <h1>Dados de entrega</h1>
            <AddressFormStyle onSubmit={handleSubmit(submitFormFunctionAddress, onInvalid)}>
                <Input register={register("State")} value={state} onChange={(e) => setState(e.target.value)} name="State" type="text" placeholder="UF" errors={errors.State?.message && <p aria-label="error">{errors.State.message}</p>} />
                <Input register={register("City")} value={city} onChange={(e) => setCity(e.target.value)} name="City" type="text" placeholder="Cidade" errors={errors.City?.message && <p aria-label="error">{errors.City.message}</p>} />
                <Input register={register("Address")} value={address} onChange={(e) => setAddress(e.target.value)} name="Address" type="text" placeholder="Endereço" errors={errors.Address?.message && <p aria-label="error">{errors.Address.message}</p>} />
                {/* <Input register={register("Number")} value={number} onChange={(e) => setNumber(e.target.value)} name="Number" type="text" placeholder="Número" errors={errors.Number?.message && <p aria-label="error">{errors.Number.message}</p>} /> */}
                <Input register={register("District")} value={district} onChange={(e) => setDistrict(e.target.value)} name="District" type="text" placeholder="Bairro" errors={errors.District?.message && <p aria-label="error">{errors.District.message}</p>} />
                <Input register={register("PostalCode")} value={postalCode} onChange={(e) => setPostalCode(e.target.value)} name="PostalCode" type="text" placeholder="CEP" errors={errors.PostalCode?.message && <p aria-label="error">{errors.PostalCode.message}</p>} />
                <Button type="submit" text="Cadastrar endereço" />
            </AddressFormStyle>
        </>

    );
}