import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BookContainer({ book }) {
    return (
        <Container>
            <Link to={`/book/${book._id}`}>
                <img src={book.Image} />
                <BookName>{book.Name}</BookName>
            </Link>
            <Price_Like>
                <p>{book.Price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</p>
                <ion-icon name="heart-outline"></ion-icon>
            </Price_Like>
        </Container>
    );
}

const Container = styled.div`
    width: 130px;
    height: 190px;

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000000;
        text-decoration: none;
    }
    img{
        height: 130px;
        max-width: 130px;
    }
`;

const BookName = styled.p`
    width: 100%;
    height: auto;
    max-height: 37px;
    margin: 5px 0;
    display: flex;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Price_Like = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    ion-icon{
        width: 15px;
        height: 15px;
    }
`;