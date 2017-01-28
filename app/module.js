import {module} from 'angular';
import 'angular-route';

import appComponent from './app.component';
import authComponent from './auth/auth.component';
import warnMsgComponent from './warn_msg/warn_msg.component';
import todoListComponent from './todo_list/todo_list.component';
import todoItemComponent from './todo_item/todo_item.component';
import authService from './services/authService';


export default module('app', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<app-component></app-component>'
      })
      .when('/auth', {
        template: '<auth-component></auth-component>'
      })
      .when('/main', {
        template: '<todo-list-component></todo-list-component>'
      })
    ;
    $locationProvider.html5Mode(true)
  })
  .component('appComponent', appComponent)
  .component('authComponent', authComponent)
  .component('todoItemComponent', todoItemComponent)
  .component('todoListComponent', todoListComponent)
  .component('warnMsgComponent', warnMsgComponent)
  .factory('authService', [authService])
  .name
;
