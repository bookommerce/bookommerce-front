import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BooksList from "../BooksList/BooksList";
import Header from "../Header/Header";

export default function Home() {
    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/books")
            .then(res => setBooksList(res.data))
            .catch(res => console.log(res));
    }, []);


    if (!booksList) return;
    const mostLiked = booksList.sort((a, b) => a.likes - b.likes).slice(0, 10);
    const categorys = [...new Set(booksList.map(b => b.Category))];

    return (
        <HomeStyle>
            <Header />
            <BooksList booksList={mostLiked} title="Mais curtidos" />
            {categorys.map((c, i) => <BooksList key={i} booksList={booksList.filter(b => b.Category === c).slice(0, 3)} title={c} />)}
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    margin-top: 50px;
`;