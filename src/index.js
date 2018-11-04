/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom'
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

render(
  <BrowserRouter>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <BrowserRouter>
        <AppContainer>
          <Root store={store} history={history} />
        </AppContainer>
      </BrowserRouter>,
      document.getElementById('app')
    );
  });
}