import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    width: 100vw;
    background-color: #1C1C24;
    
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    h1 {
        font-size: 24px;
    }

    @media screen and (max-width: 768px) {
        width: auto;
    }

`;
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15%;
 
    @media screen and (max-width: 768px) {
        display: contents;
        margin-bottom: 15px;
        width: auto;
    }

`;