import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './containers/App/App';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();
