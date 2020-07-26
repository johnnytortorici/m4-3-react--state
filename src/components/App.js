import React from 'react';

import data from '../data';

import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Typeahead 
        suggestions={data.books} 
        categories={data.categories} 
        handleSelect={(match) => 
          (match) !== undefined ? window.alert(match.title) : window.alert('No results found.')} />
    </>
  );
};

export default App;
