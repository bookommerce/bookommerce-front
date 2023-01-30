import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import BooksList from "../BooksList/BooksList";
import Header from "../Header/Header";
import { CategoryStyle } from "./CategoryStyles";

export default function Category() {
    const { category } = useParams();
    const [booksList, setBooksList] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        setBooksList([]);
        if (category)
        {
            api.get(`/books/category`, { headers: { category, Authorization: token}})
            .then(res => setBooksList(res.data))
            .catch(res => console.log(res));
        }
        else
        {
            api.get(`/books`, { headers: { category, Authorization: token}})
            .then(res => setBooksList(res.data.sort((a, b) => b.Likes - a.Likes)))
            .catch(res => console.log(res));
        }

    }, [category]);


    return (
        <CategoryStyle>
            <Header />
            <BooksList booksList={booksList} title={category || "Mais Curtidos"} complete={true} />
        </CategoryStyle>
    );
}