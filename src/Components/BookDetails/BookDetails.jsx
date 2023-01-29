import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import Header from "../Header/Header";
import { AddToCart, BookAuthor, BookDescription, BookDetailsStyles, BookImage, BookPrice, BookName } from "./BookDetailsStyles";

export default function BookDetails() {
    const { idBook } = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api.get("/book/id", { headers: { idBook } })
            .then(res => {
                setBook(res.data);
                setLoading(false);
            })
            .catch(res => {
                console.log(res);
                setLoading(false);
            });
    }, []);
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
                                <AddToCart>Adicionar ao carrinho</AddToCart>
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