'use strict';
angular
    .module('app.core')
    .controller('newcategoryController', function($http,$scope, PageValues) {
        //Set page title and description
        PageValues.title = "CATEGORY";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
     
        $scope.project = {
                status: null,
             statusoption: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ]
        };
    
       
    });
