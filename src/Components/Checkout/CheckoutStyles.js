import styled from "styled-components";

export const CheckoutStyle = styled.div`
    margin-top: 50px;
    padding: 20px 30px;

    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        ion-icon{
            color: #4E4D93;
            width: 0px;
            height: 0px;
            transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)
        }
    }
    div.loaded{
        ion-icon{
            width: 200px;
            height: 200px;
        }
    }
`;

export const CheckouTitle = styled.h1`
    font-size: 24px;
    color: black;
    margin-bottom: 50px;
`;

export const PaymentStatus = styled.h2`
    font-size: 22px;
    color: black;
`;

export const Thank = styled.p`
    padding: 20px;
    font-size: 18px;
    text-align: center;
    color: black;
`;

export const HomeButton = styled.button`
    width: 300px;
    height: 56px;
    border: none;
    background-color: #4E4D93;
    color: white;
    font-size: 18px;
    margin-top: 20px;
`;