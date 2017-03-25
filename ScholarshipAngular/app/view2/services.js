var Services = angular.module('raServices', ['ngResource']);
Services.factory("Scholarship",function($resource){  
return $resource('http://localhost:8080/scholarship/webresources/scholarship.scholarship/level=:level/field=:field/country=:country/language=:language', {level:'@level',field:'@field',country:'@country',language:'@language'}, {},{
findAll:{method:'GET', isArray:true},
countREST:{method:'GET', isArray:true},
create:{method:'POST'},
edit:{method:'PUT'},
query: {method:'GET',params:{level:'@level',field:'@field',country:'@country',language:'@language'},isArray: true},
remove:{method:'DELETE'},
find:{method:'GET',params: {id: 'id'},isArray: false},
findRange:{method:'GET'},
getScholarshipfindByField:{method:'GET',params:{level:'@level',field:'@field',country:'@country',language:'@language'},isArray:true,responseType:'json'}
}
 )      
});

