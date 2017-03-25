var Services = angular.module('raServices', ['ngResource']);  
Services.factory("Scholarship",function($resource){  
return $resource('http://localhost:8080/scholarship/webresources/scholarship.scholarship', {},{
findAll:{method:'GET', isArray:true},
countREST:{method:'GET'},
create:{method:'POST'},
edit:{method:'PUT'},
remove:{method:'DELETE'},
find:{method:'GET'},
findRange:{method:'GET'},
getScholarshipfindByField:{method:'GET'}
});     
});

