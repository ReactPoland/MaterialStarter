import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from 'layouts/CoreLayout';
import HomeView                     from 'views/HomeView';
import InsuranceHomeView                     from 'views/InsuranceHomeView';
import SubpageView                  from 'views/SubpageView';
import PublishingApp                from 'views/PublishingApp';
import FormDataView 				from 'views/ViewFormData';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={InsuranceHomeView} name='home' />
    <Route component={PublishingApp}  path='/publishing' name='publishing' />
    <Route component={SubpageView}  path='/starter' name='starter' />
    <Route component={FormDataView}  path='/data-view' name='data-view' />
  </Route>
);
