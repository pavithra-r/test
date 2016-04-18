Prayer.controller('HomeCtrl',function($scope,$cordovaCamera,$ionicModal, $window, $location){
// $ionicModal.fromTemplateUrl('templates/navmenu.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   }, {
//     animation: 'slide-in-up',
//     focusFirstInput: true
//   });

  // $ionicModal.fromTemplateUrl('templates/readprayer.html', {
  //   scope: $scope
  //   }).then(function(modal) {
  //     $scope.modal = modal;
  // }, {
  //   animation: 'slide-in-up',
  //   focusFirstInput: true
  // });
    $scope.HolidayClicked = function(){
      window.location.href = "#/holiday";
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

  $scope.Logout = function()
   {
     $scope.show=false;
     window.location.href="#/login";
     localStorage.setItem("fbloginsuccessvalue","false");
     localStorage.setItem("starter_facebook_user","false");
   }

  //  $scope.aboutus=function()
  // {
  //   if($location.path()=="/welcome")
  //   {
  //     $scope.nav= true; 
  //      $scope.show=false;
  //      window.location.href="#/Aboutus";
  //   }
  //   else
  //   {
  //   $scope.show=false;
  //   $scope.nav= false; 
  //    window.location.href="#/Aboutus";
  // }
  // }

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
     window.location.href="#/authorprofile"
   }

   $scope.choosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 150,
                    targetHeight: 150,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }

 
  $scope.guidance = function()
  {
   
    window.location.href="#/guidance";
  }

  $scope.guidanceplay = function()
  {
       window.location.href="#/guidanceplay";
  }

  $scope.guidanceaudioplay = function()
  {
        window.location.href="#/guidanceaudioplay";
        var snd=angular.element( document.querySelector( '#noise' ) );
        canPlayMP3 = (typeof snd.canPlayType === "function" && snd.canPlayType("audio/mpeg") !== "");
        snd[0].src=canPlayMP3?'1.mp3':'1.mp3';
        snd[0].load();
        snd[0].play();
        $scope.ControlText="Music Off";
        $scope.IsPlay=true;
        var vol=document.getElementById("myvolgui").className;
        var volup="icon ion-android-volume-up vm-iconsize";
        if(vol=="icon vm-iconsize ion-android-volume-off")
        {
        $('#myvolgui').addClass('icon ion-android-volume-up vm-iconsize');
        }
        // var prayalong=document.getElementById("mySong").className;
        // var pray="icon ion-headphone vm-iconsizecolor";
        // if(prayalong=="icon ion-headphone vm-iconsize")
        // {
        // $('#mySong').addClass('icon ion-headphone vm-iconsizecolor');
        // }
   }

  $scope.readprayer = function()
  {
       window.location.href="#/readprayer";
  }

  $scope.goback=function()
  {
    $window.history.go(-1);
  }
   
  $scope.revelation = function()
  {
    window.location.href="#/revelation";
  }

  $scope.revelationplay = function()
  {
        window.location.href="#/revelationaudioplay";
        var snd=angular.element( document.querySelector( '#noise' ) );
        canPlayMP3 = (typeof snd.canPlayType === "function" && snd.canPlayType("audio/mpeg") !== "");
        snd[0].src=canPlayMP3?'1.mp3':'1.mp3';
        snd[0].load();
        snd[0].play();
        $scope.ControlText="Music Off";
        $scope.IsPlay=true;
        var vol=document.getElementById("myvolrev").className;
        var volup="icon ion-android-volume-up vm-iconsize";
        if(vol=="icon vm-iconsize ion-android-volume-off")
        {
        $('#myvolrev').addClass('icon ion-android-volume-up vm-iconsize');
        }
        
        // var prayalong=document.getElementById("mySongrev").className;
        // var pray="icon ion-headphone vm-iconsizecolor";
        // if(prayalong=="icon ion-headphone vm-iconsize")
        // {
        // $('#mySongrev').addClass('icon ion-headphone vm-iconsizecolor');
        // }
  }
  
  $scope.purpose = function()
  {
    window.location.href="#/purpose";
  }
  
   $scope.purposeplay = function()
  {
    window.location.href="#/purposeaudioplay";
    var snd=angular.element( document.querySelector('#noise'));
        canPlayMP3 = (typeof snd.canPlayType === "function" && snd.canPlayType("audio/mpeg") !== "");
        snd[0].src=canPlayMP3?'1.mp3':'1.mp3';
        snd[0].load();
        snd[0].play();
        $scope.ControlText="Music Off";
        $scope.IsPlay=true;
        var vol=document.getElementById("myvolpur").className;
        var volup="icon ion-android-volume-up vm-iconsize";
        if(vol=="icon vm-iconsize ion-android-volume-off")
        {
        $('#myvolpur').addClass('icon ion-android-volume-up vm-iconsize');
        }
        // var prayalong=document.getElementById("mySongpur").className;
        // var pray="icon ion-headphone vm-iconsizecolor";
        // if(prayalong=="icon ion-headphone vm-iconsize")
        // {
        // $('#mySongpur').addClass('icon ion-headphone vm-iconsizecolor');
        // }
  }

  $scope.balance = function()
  {
    window.location.href="#/balance";
  }

  $scope.balanceplay = function(event)
  {
    window.location.href="#/balanceaudioplay";
    var snd=angular.element( document.querySelector( '#noise' ) );
        canPlayMP3 = (typeof snd.canPlayType === "function" && snd.canPlayType("audio/mpeg") !== "");
        snd[0].src=canPlayMP3?'1.mp3':'1.mp3';
        snd[0].load();
        snd[0].play();
        $scope.ControlText="Music Off";
        $scope.IsPlay=true;
        var vol=document.getElementById("myvolbal").className;
        var volup="icon ion-android-volume-up vm-iconsize";
       if(vol=="icon vm-iconsize ion-android-volume-off")
       {
       $('#myvolbal').addClass('icon ion-android-volume-up vm-iconsize');
       }
        // var prayalong=document.getElementById("mySongbal").className;
        // var pray="icon ion-headphone vm-iconsizecolor";
        // if(prayalong=="icon ion-headphone vm-iconsize")
        // {
        // $('#mySongbal').addClass('icon ion-headphone vm-iconsizecolor');
        // }
  }
 
  $scope.marriage = function()
  {
    window.location.href="#/marriage";
  }
  
  $scope.marriageplay = function()
  {
    window.location.href="#/marriageaudioplay";
    var snd=angular.element( document.querySelector( '#noise' ) );
        canPlayMP3 = (typeof snd.canPlayType === "function" && snd.canPlayType("audio/mpeg") !== "");
        snd[0].src=canPlayMP3?'1.mp3':'1.mp3';
        snd[0].load();
        snd[0].play();
        $scope.ControlText="Music Off";
        $scope.IsPlay=true;
        var vol=document.getElementById("myvolmar").className;
        var volup="icon ion-android-volume-up vm-iconsize";
        if(vol=="icon vm-iconsize ion-android-volume-off")
        {
        $('#myvolmar').addClass('icon ion-android-volume-up vm-iconsize');
        }
        // var prayalong=document.getElementById("mySongmar").className;
        // var pray="icon ion-headphone vm-iconsizecolor";
        // if(prayalong=="icon ion-headphone vm-iconsize")
        // {
        // $('#mySongmar').addClass('icon ion-headphone vm-iconsizecolor');
        // }
  }

   $scope.love = function()
  {
    window.location.href="#/love";
  }

   $scope.loveplay= function()
  {
    window.location.href="#/loveaudioplay";
    var snd=angular.element( document.querySelector( '#noise' ) );
        canPlayMP3 = (typeof snd.canPlayType === "function" && snd.canPlayType("audio/mpeg") !== "");
        snd[0].src=canPlayMP3?'1.mp3':'1.mp3';
        snd[0].load();
        snd[0].play();
        $scope.ControlText="Music Off";
        $scope.IsPlay=true;
        var vol=document.getElementById("myvolluv").className;
        var volup="icon ion-android-volume-up vm-iconsize";
        if(vol=="icon vm-iconsize ion-android-volume-off")
        {
        $('#myvolluv').addClass('icon ion-android-volume-up vm-iconsize');
        }
  //       var prayalong=document.getElementById("mySongluv").className;
  //       var pray="icon ion-headphone vm-iconsizecolor";
  //       if(prayalong=="icon ion-headphone vm-iconsize")
  //       {
  //       $('#mySongluv').addClass('icon ion-headphone vm-iconsizecolor');
  //       }
}

   $scope.ClickNextques = function()
  {
    window.location.href="#/surveyquesone";
  }

});