import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from 'layouts/CoreLayout';
import InsuranceHomeView            from 'views/InsuranceHomeView';
import SubpageView                  from 'views/SubpageView';
import FormDataView 				from 'views/ViewFormData';
import ClientsComponent 			from 'views/ClientsView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={InsuranceHomeView} name='home' />
    <Route component={SubpageView}  path='/form' name='form' />
    <Route component={FormDataView}  path='/data-view' name='data-view' />
    <Route component={ClientsComponent}  path='/clients' name='clients' />
  </Route>
);
