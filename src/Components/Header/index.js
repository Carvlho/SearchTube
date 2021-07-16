import React from 'react';
import { Container, Logo, Icons, Twitter, Facebook, Instagram, Youtube } from './style';


const Header = (props) => {

    return (
        <Container>
            <Logo>
                <span></span>
                <h1>SearchTube</h1>
            </Logo>
            {props.middle}
            <Icons>
                {props.right}
            </Icons>
        </Container>
    );
}

export default Header;