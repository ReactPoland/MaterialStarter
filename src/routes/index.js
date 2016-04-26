import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from 'layouts/CoreLayout';
import InsuranceHomeView            from 'views/InsuranceHomeView';
import SubpageView                  from 'views/SubpageView';
import FormDataView 				from 'views/ViewFormData';
import ClientsComponent 			from 'views/ClientsView';
import CriticallIllness 			from 'views/CriticalIllness';
import NoMedicalExam 			from 'views/NoMedicalExam';
import LifeInsurance 			from 'views/LifeInsurance';
import Disability 			from 'views/Disability';
import NeedsAnalysis 			from 'views/NeedsAnalysis';
import News 			from 'views/News';
import Settings 			from 'views/Settings';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={InsuranceHomeView} name='home' />
    <Route component={LifeInsurance}  path='/life-insurance' name='life-insurance' />
    <Route component={FormDataView}  path='/data-view' name='data-view' />
    <Route component={ClientsComponent}  path='/clients' name='clients' />
    <Route component={CriticallIllness}  path='/critical-illness' name='critical-illness' />
    <Route component={NoMedicalExam}  path='/no-medical-exam' name='no-medical-exam' />
    <Route component={Disability}  path='/disability' name='disability' />
    <Route component={NeedsAnalysis}  path='/needs-analysis' name='needs-analysis' />
    <Route component={News}  path='/news' name='news' />
    <Route component={Settings}  path='/settings' name='settings' />
  </Route>
);
