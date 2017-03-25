/* global $data */

'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl',['$scope', 'Scholarship', function($scope, Scholarship) {
      
      $scope.data = {};
      $scope.submitForm = function(){
      console.log($scope.data.level);
      console.log($scope.data.field);
      console.log($scope.data.country);
      console.log($scope.data.language); 
Scholarship.getScholarshipfindByField( {'level':$scope.data.level,'field':$scope.data.field,'country':$scope.data.country,'language':$scope.data.language}, function( response ){
$scope.allscholarship = response;
});
} 
      console.log($scope.data);      
                        
       }]);