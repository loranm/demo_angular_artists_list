'use strict';

var app = angular.module('app', ['ngRoute','ngResource']);


app.controller('title', ['$scope', function($scope){
  $scope.title = 'Angular rules !!!'
}])
