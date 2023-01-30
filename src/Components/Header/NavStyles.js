import styled from "styled-components";

export const NavStyle = styled.nav`
    width: 250px;
    height: 100vh;
    position: fixed;
    left: ${props => props.active ? "0px" : "-250px"};
    top: 0px;
    z-index: 2;
    transition: left 300ms ease-out;
    display: flex;
    flex-direction: column;
    background-color: white;


    font-size: 20px;
    color: black;
    a{
        padding: 8px 15px;
        text-decoration: none;
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p{
        font-size: 22px;
        padding: 14px 15px;
        background-color: #2A254B;
        color: white;
    }

    div{
        display: inherit;
        flex-direction: inherit;
        box-shadow: 0 1px 2px rgba(0,0,0,.2);
    }

    svg{
        align-self: center;
    }
`;

export const BlackPanel = styled.button`
    width: ${props => props.active ? "100vw" : "0"};
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 1;
    background-color: ${props => props.active ? "rgba(0,0,0,.5)" : "rgba(0,0,0,0)"};
    border: none;
    transition: background-color 300ms ease-out;
`;