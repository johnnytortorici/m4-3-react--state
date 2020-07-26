import React from 'react';

import styled from 'styled-components';

import Wrapper from './Wrapper';
import Suggestion, { matches } from './Suggestion';

const Typeahead = ({ suggestions, categories, handleSelect }) => {
    const [ search, setSearch ] = React.useState('');
    const [ selectedIndex, setSelectedIndex ] = React.useState(0);
    
    return (
        <Wrapper>
            <div>
                <SearchBox
                    type='text'
                    id='search'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={(event) => {
                        switch (event.key) {
                            case 'Enter':
                                handleSelect(matches[selectedIndex]);
                                return;
                            case 'ArrowUp':
                                setSelectedIndex(selectedIndex - 1);
                                return;
                            case 'ArrowDown':
                                setSelectedIndex(selectedIndex + 1);
                                return;
                            default:
                                return;
                        }
                    }}
                />

                <Button onClick={() => {
                        setSearch('');
                        document.getElementById('search').focus();
                }}>
                    Clear
                </Button>
            </div>
        
            <Suggestion 
                search={search} 
                suggestions={suggestions} 
                handleSelect={handleSelect} 
                selectedIndex={selectedIndex} 
                setSelectedIndex={setSelectedIndex} 
                categories={categories} 
            />
        </Wrapper>
    );
};

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
    cursor: pointer;
`;

export default Typeahead;