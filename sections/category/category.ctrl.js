'use strict';
angular
    .module('app.core')
    .controller('categoryController', function($http,$scope, PageValues) {
        //Set page title and description
        PageValues.title = "CATEGORY";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
     
        $scope.list = [];
     $http.get('admin/site/get_category').
     success(function(data){ $scope.list  = data;  });
       
    });
