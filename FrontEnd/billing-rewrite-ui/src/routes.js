import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const ListEmployeeComponent = React.lazy(() => import('./Demo/Employee/ListEmployeeComponent'));
const CreateEmployeeComponent = React.lazy(() => import('./Demo/Employee/CreateEmployeeComponent'));
const ViewEmployeeComponent = React.lazy(() => import('./Demo/Employee/ViewEmployeeComponent'));

const routes = [
    { path: '/user', exact: true, name: 'Employee Management', component: ListEmployeeComponent },
    { path: '/add-user/:id', exact: true, name: 'Employee Management', component: CreateEmployeeComponent },
    { path: '/view-user/:id', exact: true, name: 'Employee Management', component: ViewEmployeeComponent }
];

export default routes;