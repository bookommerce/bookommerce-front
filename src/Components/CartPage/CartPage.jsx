// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../contexts/UserContext";
// import { api } from "../../services/api";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { CartPageStyle, Cart, CartBottom } from "./CartPageStyles";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const CartPage = () => {
    // const [ cartProducts, setCartProducts ] = useState([])
    // const [ balance, setBalance ] = useState(0)
    // const { token } = useContext(UserContext)

    // useEffect(()=> { 
    //     const getCartProducts = async () => {
    //         try {
    //             const response = await api.get(`/cart`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 } 
    //             });
                
    //             if(!response) {
    //                 return null;
    //             } else if (response && response.status === 200) {
    //                 const balance = response.data.reduce((acc, product) => {
    //                     return acc + product.product.value
    //                   }, 0);
    //                   setBalance(balance)
    //                 setCartProducts(response.data)
    //             }
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     getCartProducts()
    // }, [])
    

    return (
        <CartPageStyle>
            <Header />
            <h1>Seu carrinho</h1>
            <Cart>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Cart>
            <CartBottom>
                <span>Subtotal "value"</span>
                <Link to={"/checkout"}>
                    <Button text={"Vá para o checkout"} />
                </Link>
            </CartBottom>
        </CartPageStyle>
    )
}

export default CartPage;