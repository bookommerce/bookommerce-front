import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import BooksList from "../BooksList/BooksList";
import Header from "../Header/Header";

export default function Home() {
    const [booksList, setBooksList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("/books")
            .then(res => setBooksList(res.data))
            .catch(res => console.log(res));
        api.get("/categories")
            .then(res => setCategories(res.data))
            .catch(res => console.log(res));
    }, []);


    if (!booksList) return;
    const mostLiked = booksList.sort((a, b) => b.Likes - a.Likes).slice(0, 10);

    return (
        <HomeStyle>
            <Header />
            <BooksList booksList={mostLiked} title="Mais curtidos" complete={false}/>
            {categories.map((c, i) => <BooksList key={i} booksList={booksList.filter(b => b.Category === c).slice(0, 3)} title={c} />)}
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    margin-top: 50px;
`;