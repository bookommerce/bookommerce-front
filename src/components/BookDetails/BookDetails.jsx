import { useParams } from "react-router-dom";
import Header from "../Header/Header";

export default function BookDetails() {
    const { idBook } = useParams();
    return (
        <>
            <Header />
        </>
    );
}