angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $ionicModal,$ionicPlatform) {
    $scope.data = {};
	 $ionicModal.fromTemplateUrl('templates/signin.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });
  
  $scope.Login = function()
  {
	  window.location.href="#/thankyou";
  }
   
  $scope.Continue = function()
  {
	  window.location.href="#/surveyques";
  }
  $scope.Aboutus = function()
  {
	  window.location.href="#/Aboutus";
  }
   $ionicPlatform.onHardwareBackButton(function() {
     
     window.navigator.app.exitApp();
  });
})

.controller('HomeCtrl', function ($scope, $ionicModal) {
	
 $ionicModal.fromTemplateUrl('templates/navmenu.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });
  $scope.Logout = function()
  {
	  $scope.modal.hide();
	  window.location.href="#/login";
	  
  }
});