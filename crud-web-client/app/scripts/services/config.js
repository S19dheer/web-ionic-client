'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    get:'http://localhost:3000/get',
    search:'http://localhost:3000/search',
    delete:'http://localhost:3000/delete',
    update:'http://localhost:3000/update'
  });
