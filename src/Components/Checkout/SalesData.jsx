import { BookData, SalesdataStyle, SalesDataTitle, Typedata } from "./SalesDataStyles";

export default function SalesData({ user, address, books, payment }) {
    return (
        <SalesdataStyle>
            <Typedata>
                <SalesDataTitle>Dados de entrega</SalesDataTitle>
                <p>Nome: {user.Name}</p>
                <p>Estado: {address.State}</p>
                <p>Cidade: {address.City}</p>
                <p>Endereço: {address.Address}</p>
                <p>CEP: {address.ZipCode}</p>
            </Typedata>
            <Typedata>
                <SalesDataTitle>Produtos</SalesDataTitle>
                {books.map(b =>
                    <BookData>
                        <img src={b.Image} />
                        <div>
                            <p>{b.Name}</p>
                            <p>R$ {b.Price}</p>
                        </div>
                    </BookData>
                )}
            </Typedata>
            <Typedata>
                <SalesDataTitle>Dados de pagamento</SalesDataTitle>
                <p>Nome: {payment.name}</p>
                <p>Número: {payment.number}</p>
                <p>Validade: {payment.validity}</p>
                <p>CVC: {payment.cvc}</p>
            </Typedata>

        </SalesdataStyle>
    );
}