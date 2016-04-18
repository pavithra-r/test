Prayer.controller('AuthorProfileCtrl',function($scope,$ionicModal,authorservice,$window,$location){

  $ionicModal.fromTemplateUrl('templates/authorprofiledetail.html', {
    scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });

var authorprofile=function() 
  {
 
   authorservice.getall().then(function (response) 
      {
    // $scope.results = [];
    
    $scope.results = response.ViewModels;

    for(i=0;i<$scope.results.length;i++)
    {
          $scope.profile=results[i].profile;   
          $scope.authorDesc=results[i].authorDesc;
    }

  });
}

authorprofile();


  $scope.goback=function()
  {
    $window.history.go(-1);
  }

// $scope.navigationclicked = function()
// {

// if($location.path()=="/authorprofile")
// {
//  $ionicModal.fromTemplateUrl('templates/navmenu.html', {
//     scope: $scope
//     }).then(function(modal) {
//       $scope.modal = modal;
//   }, {
//     animation: 'slide-in-up',
//     focusFirstInput: true
//   });
// }

// }

  $scope.aboutustwo=function()
  {
    $scope.show=false;
    window.location.href="#/aboutustwo";
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
 $scope.imgshow=function(val)
  {
    $scope.desc=val.authorDesc;
    $scope.author_img= val.profile;
    $scope.imageshow=true;
    $scope.navigationclass = "animated slideInUp";
  }

   $scope.imghide=function()
  {
    $scope.imageshow=false;
     // $scope.navigationclass = "animated slideInDown";
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

  $scope.PrayerClicked = function()
  {
    $scope.show=false;
    window.location.href="#/LetUsPray"
  }

   $scope.authorprofile=function()
  {
     $scope.show=false;
     window.location.href="#/authorprofile";
  }

   $scope.aboutus=function()
  {
    $scope.show=false;
    window.location.href="#/Aboutus"; 
  }


});