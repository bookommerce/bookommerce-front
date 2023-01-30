import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BooksList from "../BooksList/BooksList";
import Header from "../Header/Header";

export default function Home() {
    const [booksList, setBooksList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/books")
            .then(res => setBooksList(res.data))
            .catch(res => console.log(res));
        axios.get("http://localhost:5000/categories")
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