Prayer.controller('PopupCtrl',function($scope,$ionicModal,$ionicPlatform,$ionicLoading,$location,$window,ionicToast,LoginService,$timeout){

  $ionicModal.fromTemplateUrl('templates/guidancereadprayer.html', {
    scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });

    $scope.Load=function(){
        var snd=angular.element( document.querySelector( '#noise' ) );
        canPlayMP3 = (typeof snd.canPlayType === "function" && snd.canPlayType("audio/mpeg") !== "");
        snd[0].src=canPlayMP3?'1.mp3':'1.mp3';
        snd[0].load();
        snd[0].play();
        $scope.ControlText="Music Off";
        $scope.IsPlay=true;
        // var liked=!liked;
      }
      
      $scope.ControlAudio=function(){
         //var liked=!liked;
        var snd=angular.element( document.querySelector( '#noise' ) );
        if($scope.IsPlay){
          snd[0].pause();
          $scope.IsPlay=false;
          $scope.ControlText="Music On";
        }
        else{
          snd[0].play();
          $scope.IsPlay=true;
          $scope.ControlText="Music Off";
        }       
      }
      
        jQuery(function($) {
        $("#bgAudio").prop('volume', 1);

        window.setVolume = function(bgAudio,vol) {
          sounds[bgAudio].volume = 0.10;
        }
         $("#noise").prop('volume', 0.1);

        window.setVolume = function(noise,vol) {
          sounds[noise].volume = 0.10;
        }
        });

        $scope.favclick=function()
        {
          var outline="icon vm-iconsize ion-ios-heart activated ng-animate ion-ios-heart-remove ion-ios-heart-outline-add";
          var msg=document.getElementById("myguide").className;
          if(msg==outline)

          {
                ionicToast.show('Removed From Favourite','bottom',false,800);
          }
          else
          {
                ionicToast.show('Added To Favourite','bottom',false,800);
          }
        }



 $scope.goback=function()
  {
    $window.history.go(-1);
    soundManager.stop('audio');
    // soundManager.stop('audiopoppause');
    var snd=angular.element( document.querySelector( '#noise' ) );
    snd[0].pause();
    soundManager.destroySound('audio');

  }


 $ionicPlatform.ready(function() {
  
  function formatMilliseconds(milliseconds) {

   var minutes = Math.floor(milliseconds / 60000);
   milliseconds = milliseconds % 60000;
   var seconds = Math.floor(milliseconds / 1000);
   milliseconds = Math.floor(milliseconds % 1000);
   return (minutes < 10 ? '0' : '') + minutes + ':' +
          (seconds < 10 ? '0' : '') + seconds ;

}

var player = {
   btnPlay: document.querySelector('.player__play'),
   timeElapsed: document.querySelector('.player__time-elapsed'),
   timeTotal: document.querySelector('.player__time-total'),
   btnStop: document.querySelector('.vm_iconplayback')
};


 var audio = null;
// var audiopoppause = null;


soundManager.setup({

   useFastPolling: true,
   useHighPerformance: true,


   onready: function() {
    $scope.mycontsong=function()
    {
      var audioid=document.getElementById('contplay').className;
      if(audioid=="player__play button--large activated")
      {

         audio = soundManager.createSound({
         id: 'audio',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Fulfilment_Guidance_Kimberly.mp3 ',

        whileloading: function() {
            player.timeTotal.textContent = formatMilliseconds(audio.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>',
             //    });
            // LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed.textContent = formatMilliseconds(audio.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%'); 
            // $ionicLoading.hide();
            //$timeout(LoginService.hideProgress(), 100);
         },
       
         onload: function() {
            player.timeTotal.textContent = formatMilliseconds(audio.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed').textContent = formatMilliseconds(0);
            player.btnPlay.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }
            player.btnStop.dispatchEvent(event);
         }
      });
}
     // var audioalongid=document.getElementById('mysong').className;
          // var audioalongid = document.getElementById("mySong").id;
          // var audioalongid =document.getElementsByClassName('vm-favicontext')[0].id;
var ad = document.getElementById('mySong');
var old_class = ad.className.split(' ')[2];

 if(old_class=="vm-iconsizecolor")
      {
           audio = soundManager.createSound({
           id: 'audio',
           // url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Fulfilment_Guidance_Kimberly.mp3 ',
          url:'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Prayers/Fulfillment_Guidance_Kimberly_PrayAlong.mp3',
           // autoPlay: true,(for playing automatic)

        whileloading: function() {
            player.timeTotal.textContent = formatMilliseconds(audio.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>',
             //    });
            //LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed.textContent = formatMilliseconds(audio.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%'); 
            // $ionicLoading.hide();
            //$timeout(LoginService.hideProgress(), 100);

        },
       
         onload: function() {
            player.timeTotal.textContent = formatMilliseconds(audio.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed').textContent = formatMilliseconds(0);
            player.btnPlay.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }
            player.btnStop.dispatchEvent(event);
         }
      });

}
 if(old_class=="vm-iconsize")
      {
         audio = soundManager.createSound({
         id: 'audio',
         // url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Fulfilment_Guidance_Kimberly.mp3 ',
         url:'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Fulfilment_Guidance_Kimberly.mp3 ',
         // autoPlay: true,(for playing automatic)

        whileloading: function() {
            player.timeTotal.textContent = formatMilliseconds(audio.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>',
             //    });
            //LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed.textContent = formatMilliseconds(audio.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%'); 
            // $ionicLoading.hide();
            //$timeout(LoginService.hideProgress(), 100);
        },
       
         onload: function() {
            player.timeTotal.textContent = formatMilliseconds(audio.duration);
         },

         onfinish: function() {
            // player.timeElapsed.textContent = formatMilliseconds(audio.position);
            // $timeout(this.classList.add('is-playing'), 10);
            var event;
              document.querySelector('.player__time-elapsed').textContent = formatMilliseconds(0);
            player.btnPlay.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }
            player.btnStop.dispatchEvent(event);
         }
      });
}

}
}
});
   player.btnPlay.addEventListener('click', function() {
   if(audio === null) {
   return;
   }
   if (audio.playState === 0 || audio.paused === true) {
   audio.play();
   this.classList.add('is-playing');
   //$timeout(LoginService.hideProgress(), 100);
   } 
   else {
   audio.pause();
   this.classList.remove('is-playing');
   //$timeout(LoginService.hideProgress(), 100);
   }  
   });

   player.btnStop.addEventListener('click', function() {
       if (audio === null) {
         return;
       }
       $(".vm_progBar").css('width', '0');
       audio.stop();
       document.querySelector('.player__time-elapsed').textContent = formatMilliseconds(0);
       player.btnPlay.classList.remove('is-playing');

   });
  })
});