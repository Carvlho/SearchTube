import styled, { css } from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


export const Link = styled.a`
    color: black;
    margin: 5px;
    cursor: pointer;
    margin-bottom: 15px;

    :hover {
        color: blue;
    }
`;

const styleIcon = css`
    width: 30px;
    height: 30px;
    color: white;

    :hover {
        color: #4447E2;
    }

`;
export const Twitter = styled(FaTwitter)`
    ${styleIcon}
`;
export const Facebook = styled(FaFacebook)`
    ${styleIcon}
`;
export const Instagram = styled(FaInstagram)`
    ${styleIcon}
`;
export const Youtube = styled(FaYoutube)`
    ${styleIcon}
`;