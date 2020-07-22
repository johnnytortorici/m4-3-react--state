import React from 'react';

import styled from 'styled-components';

const SuggestionBox = styled.ul`
    margin-top: 10px;
    width: 380px;
    box-shadow: 0 5px 10px lightgrey;
`;

const Item = styled.li`
    padding: 20px;
    line-height: 1.2;
    &:hover {
        background-color: #f6edff;
        cursor: pointer;
    }
`;

const Suggestion = ({ search, suggestions, handleSelect }) => {
    // function that returns array of matches
    const handleMatches = (search) => {
        return (
            suggestions.filter((suggestion) => {
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
            {handleMatches(search).map((match) => {
                return (
                    <Item 
                        key={match.id} 
                        onClick={() => handleSelect(match.title)}>
                            {match.title}
                    </Item>
                )
            })}
        </SuggestionBox>
    )
};

export default Suggestion;