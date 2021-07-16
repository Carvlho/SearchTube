import React from 'react';
import styled from 'styled-components';

const List = props => {
    return (
        <>
            <Container>
                <Video>
                    <iframe
                        title={`${props.title}-video`}
                        allowFullScreen
                        src={props.video}
                    >
                        <p>Your browser does not support Iframe.</p>
                    </iframe>
                </Video>

                <Description>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </Description>
            </Container>
        </>
    )
}

export default List;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1C1C24;
    border-radius: 10px;
    border: 1px solid #4447E2;
    margin: 10px;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`;

const Video = styled.div`
    min-width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const Description = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: white;
    text-align: center;

    p {
        margin-top: 5px;
    }
`;