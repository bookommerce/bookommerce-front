import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { CartPageStyle, Cart, CartBottom } from "./CartPageStyles";
import Product from "../Product/Product";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CartPageSchema from "./CartPageSchema";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const [cartProducts, setCartProducts] = useState([])
    const [balance, setBalance] = useState(0)
    const { token } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        const getCartProducts = async () => {
            try
            {
                const response = await api.get(`/cart`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response)
                {
                    return null;
                } else if (response && response.status === 200)
                {
                    const balance = response.data.reduce((acc, product) => {
                        return acc + product.book.Price
                    }, 0);
                    setBalance(balance)
                    setCartProducts(response.data)
                }
            } catch (error)
            {
                console.error(error)
            }
        }
        getCartProducts()
    }, [token])


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(CartPageSchema),
    });
    const onInvalid = (errors) => console.error(errors);

    const submitFormPostalCode = async (data) => {
        try
        {
            const value = data.postalCode.replace(/[^0-9]+/, '');
            const address = await (await api.get("/address", { headers: { Authorization: token } })).data;
            console.log(address);
            if (value === address?.address.PostalCode.replace(/[^0-9]+/, '')) return navigate('/checkout');;


            const newAddress = await (await fetch(`https://viacep.com.br/ws/${value}/json/`)).json();
            const _address = {
                City: newAddress.localidade,
                State: newAddress.uf,
                Address: newAddress.logradouro,
                PostalCode: newAddress.cep,
                District: newAddress.bairro
            };



            await api.post('/address', { address: _address }, { headers: { Authorization: token } });
            navigate('/checkout');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CartPageStyle>
            <Header />
            <h1>Seu carrinho</h1>
            <Cart>
                {cartProducts.map((product) => <Product img={product.book.Image} name={product.book.Name} price={product.book.Price} />)}
            </Cart>
            <CartBottom>
                <span>Subtotal {balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                <form onSubmit={handleSubmit(submitFormPostalCode, onInvalid)}>
                    <Input register={register("postalCode")} name="postalCode" type="text" placeholder="CEP" errors={errors.postalCode?.message && <p aria-label="error">{errors.postalCode.message}</p>} />
                    <Button type="submit" text={"Vá para o checkout"} />
                </form>
            </CartBottom>
        </CartPageStyle>
    )
}

export default CartPage;