'use strict';
angular
    .module('app.core')
    .controller('categoryController', function($http,$scope,$location,$route,PageValues) {
        //Set page title and description
        PageValues.title = "CATEGORY";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
     
        $scope.list = [];
     $http.get('admin/site/get_category').
     success(function(data){ $scope.list  = data;  });
       

      $scope.delete = function(data) {     
   
               
         $http({
            url: 'admin/site/delete_category',
            method: "POST",
            data: data,
          })
         .then(function(response) {

            console.log(response);
            if(response.data=='1'){
            
                 $route.reload();
              // $location.path('/category');
            }
       });
    

    } });
