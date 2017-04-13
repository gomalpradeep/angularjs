'use strict';
angular
    .module('app.core')
    .controller('categoryController', function($http,$scope,$location,$route,PageValues) {
        //Set page title and description
        PageValues.title = "CATEGORY";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
      $scope.todos = []; 
            $scope.list = []  
          ,$scope.currentPage = 1
          ,$scope.numPerPage = 3
          ,$scope.maxSize = 5;


  $scope.makeTodos = function() {
     $http.get('admin/site/get_category').
     success(function(data){ 

  $scope.todos = []; 
//console.log(JSON.stringify(data));
 
        $scope.todos=data;
 $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
  //  alert(begin);alert(end);
    $scope.list = $scope.todos.slice(begin, end);
   // console.log($scope.list);

  });
     // $scope.list = $scope.todos.slice($scope.currentPage-1, $scope.numPerPage);
  
   });  };
  $scope.makeTodos(); 
   
      
 
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
