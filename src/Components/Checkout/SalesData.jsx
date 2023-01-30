import { BookData, SalesdataStyle, SalesDataTitle, Typedata } from "./SalesDataStyles";

export default function SalesData({ user, address, books, payment }) {

    return (
        <SalesdataStyle>
            <Typedata>
                <SalesDataTitle>Dados de entrega</SalesDataTitle>
                <p>Nome: {user.name}</p>
                <p>Estado: {address.State}</p>
                <p>Cidade: {address.City}</p>
                <p>Endereço: {address.Address}</p>
                <p>CEP: {address.PostalCode}</p>
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
                <p>Nome: {payment.Name}</p>
                <p>Número: {payment.Number}</p>
                <p>Validade: {payment.Validity}</p>
                <p>CVC: {payment.CVC}</p>
            </Typedata>

        </SalesdataStyle>
    );
}