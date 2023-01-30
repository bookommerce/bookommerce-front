import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import Header from "../Header/Header";
import AddressForm from "./AddressForm";
import { CheckoutStyle, HomeButton, MainDiv, PageTitle, PaymentStatus, Thank } from "./CheckoutStyles";
import PaymentForm from "./PaymentForm";
import SalesData from "./SalesData";

export default function Checkout() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { token, user } = useContext(UserContext);
    const [books, setBooks] = useState(undefined)
    const [payment, setPayment] = useState(undefined);
    const [ addressData, setAddressData ] = useState("") 

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
                    setBooks(response.data)
                }
            } catch (error)
            {
                console.error(error)
            }
        }
        getCartProducts();
    }, [token])

    return (
        <>
            <Header />
            <CheckoutStyle>
                <PageTitle>Status do pagamento</PageTitle>
                {payment ?
                    <MainDiv className={!loading && "loaded"}>
                        {loading ?
                            <>
                                <PaymentStatus>Processando pagamento</PaymentStatus>
                                <ThreeDots
                                    height="200"
                                    width="100"
                                    radius="9"
                                    color="#2A254B"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                            </>
                            :
                            <>
                                <PaymentStatus>Pagamento confirmado!</PaymentStatus>
                                <ion-icon name="checkmark-circle"></ion-icon>
                                <SalesData user={user}
                                    address={addressData}
                                    payment={payment}
                                    books={
                                        books.map((book) => book.book)
                                    } />
                            </>
                        }
                        <HomeButton onClick={() => navigate('/home')}>Voltar a Home</HomeButton>
                    </MainDiv>
                    :
                    <MainDiv>
                        <AddressForm setAddressData={setAddressData} addressData={addressData} />
                        <PaymentForm setPayment={(p) => {
                            setPayment(p);
                            setTimeout(() => setLoading(false), 2000);
                        }} />
                        {/*
                 */}

                    </MainDiv>
                }

            </CheckoutStyle>
        </>
    );
}