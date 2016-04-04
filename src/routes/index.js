import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from 'layouts/CoreLayout';
import HomeView                     from 'views/HomeView';
import SubpageView                  from 'views/SubpageView';
import FormDataView 				from 'views/ViewFormData';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} name='home' />
    <Route component={SubpageView}  path='/starter' name='starter' />
    <Route component={FormDataView}  path='/data-view' name='data-view' />

  </Route>
);
