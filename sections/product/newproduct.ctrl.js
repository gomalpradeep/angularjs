'use strict';
angular
    .module('app.core')
    .directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }])
    .service('fileUpload', ['$http', function ($http,$scope) {
            this.uploadFileToUrl = function(file, uploadUrl){
               
            }
         }])
    .controller('newproductController', function($http,$scope,$window,$location,fileUpload, PageValues) {
        //Set page title and description
        PageValues.title = "product";
        PageValues.description = "Add ,Edit and update.";
        //Setup view model object
     

         $http.get('admin/site/get_category/1').
         success(function(data){ 
            $scope.editProject.categoryoption = data;

     

        });

        $scope.editProject = {
                status: null,
             statusoption: [
          {id: '0', name: 'Disable'},
          {id: '1', name: 'Enable'},
   

          ]
        };

      $scope.uploadFile = function(){
               var file = $scope.editProject.myFile;
               
               console.log('file is ' );
               console.dir(file);
               
               var uploadUrl = "admin/site/uploadfile";
              
              
                             
               // var res= fileUpload.uploadFileToUrl(file, uploadUrl);
               var fd = new FormData();
               fd.append('file', file);
            
               $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(response){
                console.log(response);
                $scope.editProject.myFile=response.newfilename;
               })
            
               .error(function(){
               });
             //console.log(res);

              };
                $scope.update = function(data) {     
                  console.log(data);
                  $scope.editProject = angular.copy(data);
                    
                      $http({
                  url: 'admin/site/set_product',
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

     
