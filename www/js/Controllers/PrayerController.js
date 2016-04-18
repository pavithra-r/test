Prayer.controller('PrayerCtrl',function($scope,$location, $ionicPopup, $ionicModal,$ionicPlatform,$rootScope,$ionicLoading,LoginService,UserService,$state,$q,$interval){

// $ionicModal.fromTemplateUrl('templates/navmenu.html', {
//     scope: $scope
// 		}).then(function(modal) {
// 			$scope.modal = modal;
// 	}, {
//     animation: 'slide-in-up',
//     focusFirstInput: true
//   });

  $scope.fulfill = function()
  {
    $scope.show=false;
    window.location.href="#/fulfillment";
  }

    $scope.health = function()
  {
    $scope.show=false;
    window.location.href="#/health";
  }

    $scope.general = function()
  {
    $scope.show=false;
    window.location.href="#/general";
  }

     $scope.relationship = function()
  {
    $scope.show=false;
    window.location.href="#/relationship";
  }

   $scope.PrayerClicked = function()
  {
    $scope.show=false;
	  window.location.href="#/LetUsPray";
  }

  $scope.overlayshow=function()
  {
    $scope.show=true;
    $scope.navigationclass = "animated slideInDown";
  }

   $scope.overlayhide=function()
  {
     $scope.show=false;
     $scope.navigationclass = "animated slideInUp";
     
  }

  $scope.aboutus=function()
  {
    $scope.show=false;
    window.location.href="#/Aboutus"; 
  }


  $scope.aboutustwo=function()
  {
    $scope.show=false;
    window.location.href="#/aboutustwo";
  }
  

  $scope.Logout = function()
  { 
     $scope.show=false;
     window.location.href="#/login";
     localStorage.setItem("fbloginsuccessvalue","false");
     localStorage.setItem("starter_facebook_user","false");
    
  }

   $scope.userprofile = function()
  {
    $scope.show=false; 
    window.location.href="#/userprofile"; 
  }

   $scope.authorprofile=function()
    {
     $scope.show=false;
     window.location.href="#/authorprofile";
    }

})