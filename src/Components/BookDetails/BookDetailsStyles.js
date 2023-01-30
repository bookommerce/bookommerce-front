import styled from "styled-components";

export const BookDetailsStyles = styled.div`
    width: 100%;
    margin-top: 50px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;

    align-items: ${props => props.isLoading ? "center" : "flex-start"};

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const BookName = styled.h1`
    width: 100%;
    height: auto;
    font-size: 24px;
    display: flex;
    color: black;
`;

export const BookAuthor = styled.h3`
    width: 100%;
    font-size: 18px;
    color: lightgray;
`;

export const BookImage = styled.img`
    height: 250px;
    max-width: 100%;
    align-self: center;

    margin: 30px 0px;
`;

export const BookPrice = styled.h2`
    width: 50%;
    min-height: 100%;
    font-size: 22px;
    color: black;
`;

export const AddToCart = styled.button`
    width: 50%;
    height: 56px;
    border: none;
    color: white;
    background-color: #2A254B;
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
`;

export const BookDescription = styled.h2`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    color: black;
    margin-top: 35px;

    p{
        height: inherit;
        display: inherit;
        font-size: 15px;
        color: inherit;
        text-align: justify;
        line-height: 17px;
        margin-top: 10px;
    }
`;