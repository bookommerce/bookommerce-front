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
    const { token } = useContext(UserContext);
    const [books, setBooks] = useState(undefined)
    setTimeout(() => setLoading(false), 2000);
    const [completedPayment, setcompletedPayment] = useState(false);

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

    console.log(books)
    return (
        <>
            <Header />
            <CheckoutStyle>
                <PageTitle>Status do pagamento</PageTitle>
                {completedPayment ?
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
                            </>
                        }
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </MainDiv>
                    :
                    <MainDiv>
                        <AddressForm />
                        <PaymentForm />
                                {/* <SalesData user={{ Name: "Fulano" }}
                    address={{ State: "RJ", City: "rio de janeiro", Address: "XV de novembro 234", ZipCode: "65300-234" }}
                    payment={{ Name: "Fulano", Number: "1234-1234-1234-1245", Validity: "01/24", CVC: "123" }}
                    books={
                       books.map((book) => book.book)
                    } />
                <HomeButton onClick={() => navigate('/home')}>Voltar a Home</HomeButton> */}

                    </MainDiv>
                }

            </CheckoutStyle>
        </>
    );
}