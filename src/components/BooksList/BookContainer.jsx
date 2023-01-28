import { Link } from "react-router-dom";
import { BookName, Container, Price_Like } from "./BookContainerStyles";

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
