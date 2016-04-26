angular.module('codeList', []);
angular.module('codeList')
.controller('code.list', function($scope){
  $scope.title ="Code List App";
  $scope.list =[
    {code: "git init"},
    {code: "git add -A"},
    {code: 'git commit -m "Initial commit"'},
    {code: "cd"},
    {code: "cd .."},
    {code: "ls"},
    {code: "touch [nameoffile]"},
    {code: "mkdir"}
    ];
  $scope.alpha ='code';
})