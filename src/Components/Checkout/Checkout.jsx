import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import AddressForm from "./AddressForm";
import { CheckoutStyle, HomeButton, MainDiv, PageTitle, PaymentStatus, Thank } from "./CheckoutStyles";
import PaymentForm from "./PaymentForm";
import SalesData from "./SalesData";


export default function Checkout() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    setTimeout(() => setLoading(false), 2000);



    return (
        <>
            <Header />
            <CheckoutStyle>
                <PageTitle>Status do pagamento</PageTitle>
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
                    {
                        !loading &&
                        <>
                            <AddressForm />
                            <PaymentForm />
                            {/* <SalesData user={{ Name: "Fulano" }}
                                address={{ State: "RJ", City: "rio de janeiro", Address: "XV de novembro 234", ZipCode: "65300-234" }}
                                payment={{ Name: "Fulano", Number: "1234-1234-1234-1245", Validity: "01/24", CVC: "123" }}
                                books={[{ Image: "https://m.media-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg", Name: "Harry Potter e a Pedra Filosofal", Price: "23,12" },
                                {Image:"https://m.media-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg", Name:"Harry Potter e a Pedra Filosofal", Price:"23,12"}]} />
                            <HomeButton onClick={() => navigate('/home')}>Voltar a Home</HomeButton> */}
                        </>

                    }
                </MainDiv>
            </CheckoutStyle>
        </>
    );
}