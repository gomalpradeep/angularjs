'use strict';
angular
    .module('app.core')
    .controller('newcategoryController', function($http,$scope,$window,$location, PageValues) {
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

       angular.module('uniqueField', [])
       .directive('uniqueField', function($http) {
      var toId;
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) { 
          //when the scope changes, check the field.
          scope.$watch(attr.ngModel, function(value) {
            // if there was a previous attempt, stop it.
            if(toId) clearTimeout(toId);
            alert(value);
            // start a new attempt with a delay to keep it from
            toId = setTimeout(function(){
              // call to some API that echo "1" or echo "0"
              $http.get('admin/site/check_unique_category/' + value).success(function(data) {

                //set the validity of the field
                if (data == "1") 
                {
                    ctrl.$setValidity('uniqueField', false);
                }
                else if (data == "0")
                {
                    ctrl.$setValidity('uniqueField', true);
                }
              });
            }, 200);
          })
        }
      }
    });;
