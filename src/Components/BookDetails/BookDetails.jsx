import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import Header from "../Header/Header";
import { AddToCart, BookAuthor, BookDescription, BookDetailsStyles, BookImage, BookPrice, BookName } from "./BookDetailsStyles";

export default function BookDetails() {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { token } = useContext(UserContext);
    const [bookOnCart, setBookOnCart] = useState(false);

    useEffect(() => {
        const apiRequest = async () => {
            setLoading(true);
            try {
                setBook(await (await api.get("/book/id", { headers: { bookId, Authorization: token } })).data);
                setLoading(false);

                const _book = await (await api.get("/cart/id", { headers: { bookid: bookId, Authorization: token } })).data;
                if (_book) setBookOnCart(true);
                else setBookOnCart(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setBookOnCart(false);
            }
        }
        apiRequest();
    }, []);

    function addToCart() {
        const _book = {
            bookId: book._id,
            Name: book.Name,
            Price: book.Price,
            Image: book.Image
        };
        api.post("/cart/add", {book: _book}, { headers: { Authorization: token } })
            .then(res => {
                alert(res.data);
                setBookOnCart(true);
            })
            .catch(res => {
                console.log(res);
            });
    }

    return (
        <>
            <Header />
            <BookDetailsStyles isLoading={loading}>
                {
                    loading ?
                        <ThreeDots
                            height="60"
                            width="60"
                            radius="9"
                            color="#2A254B"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName="loader"
                            visible={true}
                        /> :
                        <>
                            <BookName>{book.Name}</BookName>
                            <BookAuthor>{book.Author}</BookAuthor>
                            <BookImage src={book.Image} />
                            <div>
                                <BookPrice>{book.Price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</BookPrice>
                                <AddToCart onClick={() => addToCart()}>
                                    {bookOnCart ?
                                        "Adicionado ao carrinho" :
                                        "Adicionar ao carrinho"}
                                </AddToCart>
                            </div>
                            <BookDescription>
                                Descrição
                                <p>{book.Description}</p>
                            </BookDescription>
                        </>
                }
            </BookDetailsStyles>
        </>
    );
}