import styled from "styled-components";

export const SigninPageStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 15px;
    background-color: #F9F9F9;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        line-height: 50px;
        color: #2A254B;
    }

    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #2A254B;
        text-decoration: none;
    }

    span {
        color: #2A254B;
    }
`

export const FormSigninPage = styled.form`
    max-width: 375px;
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
`