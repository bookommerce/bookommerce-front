import styled from "styled-components";

export const CartPageStyle = styled.main`
    height: 100vh;
    margin-top: 50px;
    background-color: #F9F9F9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    h1 {
        color: #2A254B;
        padding: 0 20px;
        font-size: 24px;
        line-height: 140%;
        width: calc( 100% - 20px);
        max-width: 1200px;
    }
`
export const Cart = styled.div`
    width: calc( 100% - 20px);
    max-width: 1200px;
    min-height: calc(100% - 70%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid #EBE8F4;
    margin-bottom: 50px;
`

export const CartBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: calc( 100% - 20px);
    max-width: 1200px;

    span {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end !important;
        padding: 0 calc(100% - 90%);
        color: #4E4D93;
        font-size: 20px;
        line-height: 140%;
    }

    button {
        display: flex;
        margin: 0 auto;
        min-width: 300px;
        width: 100%;
    }

    a {
        max-width: 300px;
        text-decoration: none;
    }

`