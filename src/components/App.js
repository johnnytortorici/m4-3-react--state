import React from 'react';

import data from '../data';

import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';
import Wrapper from './Wrapper';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Wrapper>
        <Typeahead suggestions={data.books} 
          handleSelect={(suggestions) => window.alert(suggestions)} />
      </Wrapper>
    </>
  );
};

export default App;
