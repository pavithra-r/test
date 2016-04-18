Prayer.controller('LoginCtrl',function($scope,ionicToast,$ionicPopup,$ionicModal,$ionicPlatform,$rootScope,$ionicLoading,LoginService,UserService,$state,$q,$interval,$window){
$interval(function(){
    $rootScope.checkConnection();
  }, 1000)
 // $scope.login = function() {
 //        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
 //            $state.go('thankyou');
 //        }).error(function(data) {
 //            var alertPopup = $ionicPopup.alert({
 //                title: 'Login failed!',
 //                template: 'Invalid credentials!'
 //            });
 //        });
 //    }
 // $scope.data = {};


// $scope.data = {
//      username:"prayerseeker@prayerpartner.mobi",
//      password:"mark1124"
// }

// $scope.login = function() {
// if($scope.data.username=="prayerseeker@prayerpartner.mobi" &&  $scope.data.password=="mark1124"){

//        window.location.href = "#/thankyou";
//        ionicToast.hide();           
// }
// else
// {
//     ionicToast.show('please enter correct username and password.','bottom',false,2500);
//     window.location.href = "#/login";
// }
// }

$scope.data = {};
$scope.login = function() {

    var email=document.forms["loginpage"]["email"].value;
    var password=document.forms["loginpage"]["password"].value;

if(email=="prayerseeker@prayerpartner.mobi" && password=="mark1124"){

       window.location.href = "#/thankyou";
       ionicToast.hide();           
}
else
{
    ionicToast.show('Invalid Credentials','bottom',false,800);
    window.location.href = "#/login";
}
if(email=="" && password==""){
 ionicToast.show('Email Id is required<br/>Password is required','bottom',false,800);   
}
if(email=="prayerseeker@prayerpartner.mobi" && password==""){
 ionicToast.show('Password is required','bottom',false,800);   
}
if(email=="" && password=="mark1124"){
 ionicToast.show('Email id is required','bottom',false,800);   
} 

}


$scope.signin= function() {

    var username=document.forms["signin"]["username"].value;
    var email=document.forms["signin"]["email"].value;
    var password=document.forms["signin"]["password"].value;
    
}





 $scope.swipe=function()
    {
    window.location.href = "#/login";
    }

	$ionicModal.fromTemplateUrl('templates/signin.html', {
    scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
	}, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });

   var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
	  // var alertPopup = $ionicPopup.alert({
   //              title: 'Login failed!',
   //              template: 'Invalid credentials!'
   //          });
          ionicToast.show('Invalid credentials,Login Failed', 'bottom', false,800);

      return;
    }

    var authResponse = response.authResponse;

    getFacebookProfileInfo(authResponse)
    .then(function(profileInfo) {
      //for the purpose of this example I will store user data on local storage
      UserService.setUser({
        authResponse: authResponse,
        userID: profileInfo.id,
        name: profileInfo.name,
        email: profileInfo.email,
        picture : "http://graph.facebook.com/" + authResponse.userID + "/picture"
      });

      $ionicLoading.hide();
      $state.go('thankyou');

    }, function(fail){
      // var alertPopup = $ionicPopup.alert({
      //           title: 'Login failed!',
      //           template: 'Invalid credentials!'
      //       });
          ionicToast.show('Invalid credentials,Login Failed', 'bottom', false, 800);

      //fail get profile info
      console.log('profile info fail', fail);
    });
  };


  //This is the fail callback from the login method
  var fbLoginError = function(error){
    console.log('fbLoginError', error);
	// var alertPopup = $ionicPopup.alert({
 //                title: 'Login failed!',
 //                template: 'Please try Login after sometime!'
 //            });
    ionicToast.show('Login failed!Please try Login after sometime!', 'bottom', false, 800);

			$state.go('login');
    $ionicLoading.hide();
  };

  //this method is to get the user profile info from the facebook api
  var getFacebookProfileInfo = function (authResponse) {
    var info = $q.defer();

    facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
      function (response) {
        console.log(response);
		localStorage.setItem("fbloginsuccessvalue","true");
        info.resolve(response);
      },
      function (response) {
        console.log(response);
        info.reject(response);
      }
    );
    return info.promise;
  };

  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {

    facebookConnectPlugin.getLoginStatus(function(success){
     if(success.status === 'connected'){
        // the user is logged in and has authenticated your app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed request, and the time the access token
        // and signed request each expire
        console.log('getLoginStatus', success.status);

        //check if we have our user saved
        var user = UserService.getUser('facebook');

        if(!user.userID)
        {
          getFacebookProfileInfo(success.authResponse)
          .then(function(profileInfo) {

            //for the purpose of this example I will store user data on local storage
            UserService.setUser({
              authResponse: success.authResponse,
              userID: profileInfo.id,
              name: profileInfo.name,
              email: profileInfo.email,
              picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
            });

            $state.go('thankyou');

          }, function(fail){
            //fail get profile info
            console.log('profile info fail', fail);
			// var alertPopup = $ionicPopup.alert({
   //              title: 'Login failed!',
   //              template: 'Please try Login after sometime!'
   //          });

              ionicToast.show('Login failed!Please try Login after sometime!', 'bottom', false, 800);

			$state.go('login');
          });
        }else{
          $state.go('thankyou');
        }

     } else {
        //if (success.status === 'not_authorized') the user is logged in to Facebook, but has not authenticated your app
        //else The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
    $ionicLoading.hide();
       //ask the permissions you need. You can learn more about FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
        facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
      $state.go('login');
	  }
    });
  };
  
  $scope.Login = function()
  {
	  window.location.href="#/thankyou";
  }
   $scope.Continue = function()
  {
    var rangeval= document.getElementById("range").value;

    if(rangeval==0)
    {
     var confirmPopup = $ionicPopup.confirm({
     title: 'Confirmation',
     template: 'Are you sure you want to proceed?',
   });
 }
 //     if(rangeval==0)
 //    {
 //     var confirmPopup = $ionicPopup.confirm({
 //     title: 'Confirmation',
 //     template: 'Are you sure you want to proceed?',
 //       buttons: [
 //      { text: '<b>No</b>',type:'button button-clear button-positive' },
 //      { text: '<b>Yes</b>',type:'button button-clear button-positive'}
 //      ],
 //           onTap: function(e) {return res}
 //   });
 // }
 else
 {
	  window.location.href="#/surveyques";
  }
  confirmPopup.then(function(res) {
     if(res) {
    window.location.href="#/surveyques";
     } else {
       console.log('canceled!');
     }
   });

  }

   
  $scope.thankuaboutus = function()
  { 
    //$scope.nav=false;
    window.location.href="#/Aboutus";
  }
  $scope.aboutus = function()
  {
	  window.location.href="#/Aboutus";
  }
  $scope.ClickNextques = function()
  {
    var rangeval= document.getElementById("range").value;
    if(rangeval==0)
    {
     var confirmPopup = $ionicPopup.confirm({
     title: 'Confirmation',
     template: 'Are you sure you want to proceed?'
     });
    }
    else
    {
     window.location.href="#/surveyquesone";
    }
    confirmPopup.then(function(res) {
     if(res) 
     {
      window.location.href="#/surveyquesone";
     } 
     else
      {
       console.log('canceled!');
     }
   });
  }

  $scope.Clicksecondques = function()
  {
    var rangeval= document.getElementById("range1").value;
    if(rangeval==0)
    {
     var confirmPopup = $ionicPopup.confirm({
     title: 'Confirmation',
     template: 'Are you sure you want to proceed?'
     });
    }

    else
    {
      window.location.href="#/surveyquestwo";
    }
      confirmPopup.then(function(res) {
     if(res) 
     {
      window.location.href="#/surveyquestwo";
     } 
     else
      {
       console.log('canceled!');
     }
   });
  }

    $scope.goback=function()
  {
    $window.history.go(-1);
  }

  $scope.fbaccess=function()
  {
  ionicToast.show("Currently can't access",'bottom', false, 800);
  }

  $scope.welcome = function()
  {
    var rangeval= document.getElementById("range2").value;
    if(rangeval==0)
    {
       var confirmPopup = $ionicPopup.confirm({
       title: 'Confirmation',
       template: 'Are you sure you want to proceed?'
       });
    }
    
    else
    {
       window.location.href="#/welcome";
    }
     confirmPopup.then(function(res) {
     if(res) 
     {
      window.location.href="#/welcome";
     } 
     else
      {
       console.log('canceled!');
     }
   });
  }

   $ionicPlatform.onHardwareBackButton(function() {
     
     window.navigator.app.exitApp();
   });
   

   function ctrl($scope) {
  $scope.value = "50";
  $scope.options = {       
    from: 1,
    to: 100,
    step: 1,
    dimension: " km",
    scale: [0, '|', 50, '|' , 100]        
  };
}
 
})