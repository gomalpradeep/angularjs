'use strict';
angular
    .module('app.core')
    .controller('editproductController', function($http,$scope,$window,$location,$routeParams, PageValues) {
        //Set page title and description
        PageValues.title = "product";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
          var id = JSON.stringify($routeParams.id);
          console.log(id);
        $http({
          url: 'admin/site/get_product_byid',
          method: "post",
          data: id ,

        })
        .then(function(response) {
                // success

             
                var obj=response.data;
               
              
                 $scope.editProject ={
                  id:obj.id,
                  name:obj.name,
              
                  
                  statusoption: [
                        {id: '0', name: 'Disable'},
                        {id: '1', name: 'Enable'},
                        ],
                          selectedItemvalue:obj.status,
                 };
                    console.log($scope.editProject );
                // $scope.selectedItemvalue =obj.status; 
        } );


        
    
      $scope.update = function(data) {     
        console.log(data);
        $scope.editProject = angular.copy(data);
          
            $http({
        url: 'admin/site/update_product',
        method: "POST",
        data: data,
    })
    .then(function(response) {
            // success

            console.log(response);
            if(response.data=='1'){
               $location.path('/product');
            }
    } );
         //var url = "http://" + $window.location.host + "/category";
        //console.log(url);
        //$window.location.href = url;
     
      };


       
    });

    