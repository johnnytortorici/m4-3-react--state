import React from 'react';

import styled from 'styled-components';

const Prediction = styled.span`
    font-weight: bold;
`;

const Match = ({ match, search }) => {
    // function that returns prediction match in bold
    const formatMatch = (search, title) => {
        let searchIndex = title.toLowerCase().indexOf(search.toLowerCase());
        return (
            <>
                <span>{title.slice(0, searchIndex)}</span>
                <span>{title.slice(searchIndex, searchIndex + search.length)}</span>
                <Prediction>{title.slice(searchIndex + search.length, title.length)}</Prediction>
            </>
        );
    };

    return (
        formatMatch(search, match.title)
    );
};

export default Match;