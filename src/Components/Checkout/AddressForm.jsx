import { AddressFormStyle, AddressStyle } from "./AddressFormStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api.js";
import Input from "../Input/Input";
import Button from "../Button/Button";
import AddressFormSchema from "./AddressFormSchema";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function AddressForm({setAddressData,addressData}) {
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
        fetch(`https://viacep.com.br/ws/${data.postalCode}/json/`)
            .then(res => res.json())
            .then(json => console.log(json));

        try
        {
            const response = await api.post("/address", data, { headers: { Authorization: `${token}` } })

            if(response) {
                setTimeout(()  => {
                    alert(response.data)
                }, 500)
            }
        } catch (error) {
            alert(error.response.data)
        }
    }

    return (
        <AddressStyle>
            <h1>Dados de entrega</h1>
            <AddressFormStyle onSubmit={handleSubmit(submitFormFunctionAddress, onInvalid)}>
                <Input register={register("state")} value={state} name="state" type="text" placeholder="UF" errors={errors.state?.message && <p aria-label="error">{errors.state.message}</p>} disabled/>
                <Input register={register("city")} value={city} name="city" type="text" placeholder="Cidade" errors={errors.city?.message && <p aria-label="error">{errors.city.message}</p>} disabled />
                <Input register={register("address")} value={address}  name="address" type="text" placeholder="Endereço" errors={errors.address?.message && <p aria-label="error">{errors.address.message}</p>} disabled />
                <Input register={register("district")} value={district} name="district" type="text" placeholder="Bairro" errors={errors.district?.message && <p aria-label="error">{errors.district.message}</p>} disabled/>
                <Input register={register("postalCode")} value={postalCode} name="postalCode" type="text" placeholder="CEP" errors={errors.postalCode?.message && <p aria-label="error">{errors.postalCode.message}</p>} disabled/>
                <Button type="submit" text="Cadastrar endereço"disabled />
            </AddressFormStyle>
        </AddressStyle>
    );
}