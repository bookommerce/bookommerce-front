import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    box-shadow: 0 1px 6px rgba(0,0,0,.3);
    background-color: #2A254B;
    color: white;

    p{
        font-size: 24px;
    }

    div.header{
        width: auto;
        height: 25px;
        display: flex;
        align-items: center;

        ion-icon{
            height: 20px;
            width: 20px;
            margin-right: 10px;
        }
    }
`;