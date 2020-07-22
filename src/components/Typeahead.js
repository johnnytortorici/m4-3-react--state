import React from 'react';

import styled from 'styled-components';

const SearchBox = styled.input`
    padding: 10px;
    margin-right: 7px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 300px;
    font-size: 1.01em;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4B0082;
    color: #fff;
    width: 75px;
    font-size: 1.01em;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
    const [ search, setSearch ] = React.useState('');

    return (
        <>
            <SearchBox
            type='text'
            id='search'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && handleSelect(search)}
            />
            <Button onClick={() => {
                    setSearch('');
                    document.getElementById('search').focus();
                }
            }>
                Clear
            </Button>
        </>
    );
};

export default Typeahead;