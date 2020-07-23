import React from 'react';

import styled from 'styled-components';

const CategoryText = styled.span`
    font-style: italic;
`;

const PurpleText = styled(CategoryText)`
    color: #4B0082;
`;

const Category = ({ categories, categoryId }) => {
    return (
        <CategoryText> in
            <PurpleText>
                {' ' + categories[categoryId].name}
            </PurpleText>
        </CategoryText>
    );
};

export default Category;