import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './routes';

const App = () =>{
  return(
    <>
      <Provider store={store}>
        <BrowserRouter basename={'dognft'}>
          <Switch>
            <Routes />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
