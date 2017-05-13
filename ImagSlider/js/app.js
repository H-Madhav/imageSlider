var app = angular.module('myApp', ['ui.bootstrap'])
.controller('CarouselCtrl', Ctrl);

CarouselCtrl.$inject = ['$scope'];
function Ctrl($scope) {

  $scope.myInterval = 4000; 

$scope.slides = [
{image:'../img/2.jpg',text:'Madhav'},
{image:'../img/3.jpg',text:'Abinash'},
{image:'../img/4.jpg',text:'Deepanshu'},
{image:'../img/2.jpg',text:'Gaurav'}
];
}