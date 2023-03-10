import styled from "styled-components";

export const BooksListStyle = styled.div`
    width: 100vw;
    height: auto;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0,0,0,.15);
`;

export const Title = styled.p`
    width: 100%;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const List = styled.div`
    width: 100%;
    max-height: ${props => props.complete ? "none" : "400px"};
    overflow: hidden;
    column-gap: 20px;
    row-gap: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
`;

export const ViewMore = styled.button`
    width: 80vw;
    max-width: 340px;
    margin-top: 20px;
    height: 56px;
    border: none;
    font-size: 16px;
`;