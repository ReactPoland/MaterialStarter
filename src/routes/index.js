import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from 'layouts/CoreLayout';
import HomeView                     from 'views/HomeView';
import SubpageView                     from 'views/SubpageView';
import PublishingApp                     from 'views/PublishingApp';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} name='home' />
    <Route component={PublishingApp}  path='/publishing' name='publishing' />

  </Route>
);
