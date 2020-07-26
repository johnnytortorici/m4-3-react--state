import React from 'react';

import styled from 'styled-components';

import Match from './Match';
import Category from './Category';

export let matches = [];

const Suggestion = ({ search, suggestions, handleSelect, selectedIndex, setSelectedIndex, categories }) => {
    // function that returns array of matches
    const handleMatches = (search) => {
        return (
            matches = suggestions.filter((suggestion) => {
                return (
                    (search.length > 1) && suggestion.title.toLowerCase().includes(search.toLowerCase())
                )
            })
        )
    };

    return (
        // only render if matches are found
        (handleMatches(search).length > 0) &&
        <SuggestionBox>
            {handleMatches(search).map((match, index) => {
                const isSelected = index === selectedIndex;

                return (
                    <Item 
                        key={match.id}
                        style={{background: isSelected ? '#f6edff' : 'transparent'}}
                        onClick={() => handleSelect(match)}
                        onMouseEnter={() => setSelectedIndex(index)}
                    >
                            {
                                <>
                                    <Match match={match} search={search} />
                                    <Category categories={categories} categoryId={match.categoryId} />
                                </>
                            }
                    </Item>
                )
            })}
        </SuggestionBox>
    )
};

const SuggestionBox = styled.ul`
    margin-top: 10px;
    width: 380px;
    box-shadow: 0 5px 10px lightgrey;
`;

const Item = styled.li`
    padding: 20px;
    line-height: 1.2;
    &:hover {
        cursor: pointer;
    }
`;

export default Suggestion;