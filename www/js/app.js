var Prayer = angular.module('Prayer', ['ionic','ngCordova','ionic-toast','Prayer.controllers', 'Prayer.services'])
.run(function($ionicPlatform,$window,$rootScope) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
      var fbloginsuccessvalue = localStorage.getItem("fbloginsuccessvalue");
    if(fbloginsuccessvalue == "true"){
        window.location.href = "#/surveyques";
    }
	else{
	//	window.location.href = "#/login";
        window.location.href = "#/swipe";

	}
	$rootScope.checkConnection=function() {
      var networkState = navigator.connection.type;

      var states = {};
      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI]     = 'WiFi connection';
      states[Connection.CELL_2G]  = 'Cell 2G connection';
      states[Connection.CELL_3G]  = 'Cell 3G connection';
      states[Connection.CELL_4G]  = 'Cell 4G connection';
      states[Connection.CELL]     = 'Cell generic connection';
      states[Connection.NONE]     = 'No network connection';
      console.log('Connection type: ' + states[networkState]);
      if(states[networkState] == 'No network connection')
      {
      $rootScope.myNetwork = states[networkState];
    }
    else
    {
      delete $rootScope.myNetwork;
    }
  }
  });
})
.config(function($stateProvider, $urlRouterProvider) { 
  $stateProvider
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('swipe', {
    url: '/swipe',
    templateUrl: 'templates/swipe.html',
    controller: 'LoginCtrl'
  })
  /**********************/
  .state('holiday', {
    url: '/holiday',
    templateUrl: 'templates/holiday.html',
    controller: 'HolidayController'
  })
  /*************************/
  .state('thankyou', {
    url: '/thankyou',
    templateUrl: 'templates/thankyou.html',
    controller: 'LoginCtrl'
  })
  .state('surveyques', {
    url: '/surveyques',
    templateUrl: 'templates/surveyques.html',
    controller: 'LoginCtrl'
  })
  .state('surveyquesone', {
    url: '/surveyquesone',
    templateUrl: 'templates/surveyques-1.html',
    controller: 'LoginCtrl'
  })
  .state('surveyquestwo', {
    url: '/surveyquestwo',
    templateUrl: 'templates/surveyques-2.html',
    controller: 'LoginCtrl'
  })
  .state('Aboutus', {
    url: '/Aboutus',
    templateUrl: 'templates/aboutus.html',
    controller: 'HomeCtrl'
  })
  .state('aboutustwo', {
    url: '/aboutustwo',
    templateUrl: 'templates/aboutustwo.html',
    controller: 'HomeCtrl'
  })
  .state('userprofile', {
    url: '/userprofile',
    templateUrl: 'templates/userprofile.html',
    controller: 'HomeCtrl'
  })

  .state('LetUsPray', {
    url: '/LetUsPray',
    templateUrl: 'templates/LetUsPray.html',
    controller: 'PrayerCtrl'
  })

  .state('fulfillment', {
    url: '/fulfillment',
    templateUrl: 'templates/fulfillment.html',
    controller: 'HomeCtrl'
  })

  .state('guidance', {
    url: '/guidance',
    templateUrl: 'templates/guidance.html',
    controller: 'HomeCtrl'
  })
  // .state('guidanceplay', {
  //   url: '/guidanceplay',
  //   templateUrl: 'templates/guidanceplay.html',
  //   controller: 'PopupCtrl'
  // })

  .state('guidanceaudioplay', {
    url: '/guidanceaudioplay',
    templateUrl: 'templates/guidanceaudioplay.html',
    controller: 'PopupCtrl'
  })

   .state('authorprofile', {
    url: '/authorprofile',
    templateUrl: 'templates/authorprofile.html',
    controller: 'AuthorProfileCtrl'
  })

    .state('authorprofiledetail', {
    url: '/authorprofiledetail',
    templateUrl: 'templates/authorprofiledetail.html',
    controller: 'AuthorProfileCtrl'

  })

   .state('health', {
    url: '/health',
    templateUrl: 'templates/health.html',
    controller: 'HomeCtrl'
  })

   .state('general', {
    url: '/general',
    templateUrl: 'templates/general.html',
    controller: 'HomeCtrl'
  })

   .state('relationship', {
    url: '/relationship',
    templateUrl: 'templates/relationship.html',
    controller: 'HomeCtrl'
  })
  
   .state('revelation', {
    url: '/revelation',
    templateUrl: 'templates/revelation.html',
    controller: 'HomeCtrl'
  })

   .state('revelationaudioplay', {
    url: '/revelationaudioplay',
    templateUrl: 'templates/revelationaudioplay.html',
    controller: 'RevelationCtrl'
  })

   .state('purpose', {
    url: '/purpose',
    templateUrl: 'templates/purpose.html',
    controller: 'HomeCtrl'
  })

    .state('purposeaudioplay', {
    url: '/purposeaudioplay',
    templateUrl: 'templates/purposeaudioplay.html',
    controller: 'PurposeCtrl'
  })

   .state('balance', {
    url: '/balance',
    templateUrl: 'templates/balance.html',
    controller: 'HomeCtrl'
  })

    .state('balanceaudioplay', {
    url: '/balanceaudioplay',
    templateUrl: 'templates/balanceaudioplay.html',
    controller: 'BalanceCtrl'
  })

    .state('marriage', {
    url: '/marriage',
    templateUrl: 'templates/marriage.html',
    controller: 'HomeCtrl'
  })
  
    .state('marriageaudioplay', {
    url: '/marriageaudioplay',
    templateUrl: 'templates/marriageaudioplay.html',
    controller: 'MarriageCtrl'
  })
    .state('love', {
    url: '/love',
    templateUrl: 'templates/love.html',
    controller: 'HomeCtrl'
  })
  
    .state('loveaudioplay', {
    url: '/loveaudioplay',
    templateUrl: 'templates/loveaudioplay.html',
    controller: 'LoveCtrl'
  })
    .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'HomeCtrl'
  })

  .state('Aboutus.menunav', {
                url: '/Aboutus',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/navmenu.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
  // $urlRouterProvider.otherwise('/login');
    $urlRouterProvider.otherwise('/swipe');

});
