'use strict';
angular
    .module('app.core')
    .controller('categoryController', function($http,$scope,$location,$route,PageValues) {
        //Set page title and description
        PageValues.title = "CATEGORY";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
    



     $http.get('admin/site/get_category').
     success(function(data){ 
        $scope.list = data;
        $scope.currentPage = 1; //current page
        $scope.entryLimit = 5; //max no of items to display in a page
        $scope.filteredItems = $scope.list.length; //Initially for no filter  
        $scope.totalItems = $scope.list.length;
 

    });
      $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };
        $scope.filter = function() {
        $timeout(function() { 
            $scope.filteredItems = $scope.filtered.length;
        }, 10);
    };

  $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
   
     
 

     // $scope.list = $scope.todos.slice($scope.currentPage-1, $scope.numPerPage);
 
 
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
    

    } }).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});;
