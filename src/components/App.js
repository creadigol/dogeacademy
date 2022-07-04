import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hashlips from './Hashlips';

class App extends Component { 

  render(){
    return (
      <BrowserRouter basename={'dognft/Admin'}>
          <Switch>
              <Route exact path='/' component={Hashlips} />
          </Switch>
      </BrowserRouter>
    );
  }

}

export default App;