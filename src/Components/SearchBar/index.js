import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.onSearch(searchQuery);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Busque sua banda ou seu artista"
            />
        </Form>
    );


}

export default SearchBar;


const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 25px;
    background-color: white;
`;

const Input = styled.input`
    height: 25px;
    width: 350px;
    border-radius: 10px;
    justify-content: center;
    padding: 8px;

    @media screen and (max-width: 768px) {
        width: 250px;
    }

`;