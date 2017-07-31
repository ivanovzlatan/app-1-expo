import Expo from 'expo';
import React, { Component } from 'react';
import Constants from "@common/Constants";

/*import {
  setCustomText
} from 'react-native-global-props';
*/

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './App/Components/reducers';

import RootRouter from './App/Components/RootRouter';

/*const customTextProps = {
  style: {
    fontFamily: Constants.fontFamily,
  }
};
setCustomText(customTextProps); */

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
