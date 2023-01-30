import styled from "styled-components";

export const SalesdataStyle = styled.div`


    p{
        font-size: 16px;
        margin-top: 5px;
    }
`;

export const Typedata = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
`;

export const SalesDataTitle = styled.h1`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const BookData = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    box-shadow: 0 0px 5px rgba(0,0,0,.4);
    padding: 5px;
    max-width: 400px;
    width: 100%;

    img{
        height: 70px;
        margin-right: 10px;
    }
    div{
        height: 70px;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;