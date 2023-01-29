import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { CheckouTitle, CheckoutStyle, HomeButton, PaymentStatus, Thank } from "./CheckoutStyles";

export default function Checkout() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    setTimeout(() => setLoading(false), 2000);

    return (
        <>
            <Header />
            <CheckoutStyle>
                <CheckouTitle>Status do pagamento</CheckouTitle>
                <div className={!loading && "loaded"}>
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
                            <Thank>
                            Seu pagamento foi efetuado com sucesso!<br />
                            Em breve sua compra chegará até você.<br />
                            Boa leitura! ;) <br />
                            </Thank>
                            <HomeButton onClick={() => navigate('/home')}>Voltar a Home</HomeButton>
                        </>

                    }
                </div>
            </CheckoutStyle>
        </>
    );
}