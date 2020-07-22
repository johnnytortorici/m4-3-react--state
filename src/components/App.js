import React from 'react';

import data from '../data';

import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Typeahead suggestions={data.books} 
        handleSelect={(suggestions) => window.alert(suggestions)} />
    </>
  );
};

export default App;
