import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from 'store';
import AuthLayout from 'layouts/Auth.js';
import AdminLayout from 'layouts/Admin.js';

import 'bootstrap/dist/css/bootstrap.css';

import 'assets/scss/paper-dashboard.scss?v=1.3.0';
import 'assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import 'assets/css/material-dashboard.css?v=2.2.26';
import 'assets/css/custom.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
        <Route path='/admin' render={(props) => <AdminLayout {...props} />} />
        <Redirect to='/admin/configuration' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
