import styled from "styled-components";

export const ProductStyle = styled.div`
    max-height: 150px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    min-width: 280px;
    gap: 15px;

    img {
        max-width: 133px;
        max-height: 150px;
    }
`

export const ProductDescriptionStyle = styled.div`
    width: calc(100% - 50%);
    max-width: 400px;    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    color: #2A254B;
`

export const ProductQuantityStyle = styled.div`
    width: 122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input, span {
        width: 40px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
    }

    span {
        cursor: pointer;
    }

    input {
        display: flex;
        justify-content: center;
        outline: 0;
        padding-left: 15px;
        color: #2A254B;
    }
`
