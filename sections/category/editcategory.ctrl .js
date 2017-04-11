'use strict';
angular
    .module('app.core')
    .controller('editcategoryController', function($http,$scope,$window,$location, PageValues) {
        //Set page title and description
        PageValues.title = "CATEGORY";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
      
        $scope.editProject = {
                status: null,
             statusoption: [
          {id: '0', name: 'Disable'},
          {id: '1', name: 'Enable'},
   

          ]
        };

    
      $scope.update = function(data) {     
        console.log(data);
        $scope.editProject = angular.copy(data);
          
            $http({
        url: 'admin/site/set_category',
        method: "POST",
        data: data,
    })
    .then(function(response) {
            // success

            console.log(response);
            if(response.data=='1'){
               $location.path('/category');
            }
    } );
         //var url = "http://" + $window.location.host + "/category";
        //console.log(url);
        //$window.location.href = url;
     
      };


       
    });

    