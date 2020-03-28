import React from 'react';
import { hot } from 'react-hot-loader';

import Routes from '~/routes';
import GlobalStyles from '~/theme/global';

function App() {
  return (
    <div>
      <GlobalStyles />

      <Routes />
    </div>
  );
}

export default hot(module)(App);
