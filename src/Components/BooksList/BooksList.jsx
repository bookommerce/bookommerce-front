import { ThreeDots } from "react-loader-spinner";
import BookContainer from "./BookContainer";
import { BooksListStyle, List, Title, ViewMore } from "./BooksListStyles";

export default function BooksList({ booksList, title, complete }) {
    return (
        <BooksListStyle>
            <Title>{title}</Title>
            {
                booksList.length < 1 ?
                    <ThreeDots
                        height="60"
                        width="60"
                        radius="9"
                        color="#2A254B"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> :
                    <List complete={complete}>
                        {booksList.map((b, i) => <BookContainer key={i} book={b} />)}
                    </List>
            }

            {!complete && <ViewMore>Ver mais</ViewMore>}

        </BooksListStyle>
    );
}