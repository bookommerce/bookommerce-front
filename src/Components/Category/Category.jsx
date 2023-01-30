import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../services/api";
import BooksList from "../BooksList/BooksList";
import Header from "../Header/Header";
import { CategoryStyle } from "./CategoryStyles";

export default function Category() {
    const { category } = useParams();
    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        setBooksList([]);
        api.get(`/books`, { headers: { category}})
            .then(res => setBooksList(res.data))
            .catch(res => console.log(res));
    }, [category]);

    if(!category) booksList.sort((a, b) => b.Likes - a.Likes);

    return (
        <CategoryStyle>
            <Header />
            <BooksList booksList={booksList} title={category || "Mais Curtidos"} complete={true} />
        </CategoryStyle>
    );
}