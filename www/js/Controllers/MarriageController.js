Prayer.controller('MarriageCtrl',function($scope,$ionicModal,$ionicPlatform,$ionicLoading,$location,$window,ionicToast,LoginService,$timeout){

  $ionicModal.fromTemplateUrl('templates/marriagereadprayer.html', {
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
      }
      
      $scope.ControlAudio=function(){
        var liked=!liked;
        
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
          var msg=document.getElementById("mymar").className;

          // if(msg!=fullicon)
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
    soundManager.stop('audio4');
    var snd=angular.element( document.querySelector( '#noise' ) );
    snd[0].pause();
    soundManager.destroySound('audio4');
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
   btnPlay4: document.querySelector('.player__play4'),
   timeElapsed4: document.querySelector('.player__time-elapsed4'),
   timeTotal4: document.querySelector('.player__time-total4'),
   btnStop4: document.querySelector('.vm_iconplaybackmar')
};

var audio4 = null;
soundManager.setup({
   useFastPolling: true,
   useHighPerformance: true,

   onready: function() {
      $scope.mymarcontsong=function()
      {
      var audioid=document.getElementById('contplaymar').className;
      if(audioid=="player__play4 button--large activated")
      {
         audio4 = soundManager.createSound({
         id: 'audio4',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Relationship_Marriage_Bill.mp3',

        whileloading: function() {
                 player.timeTotal4.textContent = formatMilliseconds(audio4.durationEstimate);
                 // $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner>'});
                 //LoginService.showProgress();
         },

         whileplaying: function() {
             player.timeElapsed4.textContent = formatMilliseconds(audio4.position);
             $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
             // $ionicLoading.hide();
            // $timeout(LoginService.hideProgress(), 100);
      },
       
         onload: function() {
            player.timeTotal4.textContent = formatMilliseconds(audio4.duration);
         },

         onfinish: function() {
            var event;
             document.querySelector('.player__time-elapsed4').textContent = formatMilliseconds(0);
            player.btnPlay4.classList.remove('is-playing');
             $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop4.dispatchEvent(event);
        }
      });
    }
 
 var ad = document.getElementById('mySongmar');
 var old_class = ad.className.split(' ')[2];
 if(old_class=="vm-iconsizecolor")
      {
 audio4 = soundManager.createSound({
         id: 'audio4',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Prayers/Relationship_Marriage_Bill_PrayAlong.mp3',

        whileloading: function() {
                 player.timeTotal4.textContent = formatMilliseconds(audio4.durationEstimate);
                 // $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner>'});
                 //LoginService.showProgress();
         },

         whileplaying: function() {
             player.timeElapsed4.textContent = formatMilliseconds(audio4.position);
             $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
             // $ionicLoading.hide();
            // $timeout(LoginService.hideProgress(), 100);
      },
       
         onload: function() {
            player.timeTotal4.textContent = formatMilliseconds(audio4.duration);
         },

         onfinish: function() {
            var event;
             $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop4.dispatchEvent(event);
      }
      });
}
if(old_class=="vm-iconsize")
      {
         audio4 = soundManager.createSound({
         id: 'audio4',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Relationship_Marriage_Bill.mp3',

        whileloading: function() {
                 player.timeTotal4.textContent = formatMilliseconds(audio4.durationEstimate);
                 // $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner>'});
                 //LoginService.showProgress();
         },

         whileplaying: function() {
             player.timeElapsed4.textContent = formatMilliseconds(audio4.position);
             $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
             // $ionicLoading.hide();
            // $timeout(LoginService.hideProgress(), 100);
      },
       
         onload: function() {
            player.timeTotal4.textContent = formatMilliseconds(audio4.duration);
         },

         onfinish: function() {
            var event;
             $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop4.dispatchEvent(event);
               }
      });
     }
}
}
});

player.btnPlay4.addEventListener('click', function() {
   if (audio4 === null) {
     return;
   }
   
   if (audio4.playState === 0 || audio4.paused === true) {
     audio4.play();
     this.classList.add('is-playing');
  //$timeout(LoginService.hideProgress(), 100);
 } else {
     audio4.pause();
     this.classList.remove('is-playing');
  //$timeout(LoginService.hideProgress(), 100);

   }
  
});
   player.btnStop4.addEventListener('click', function() {
       if (audio4 === null) {
         return;
       }
       $(".vm_progBar").css('width', '0');
       audio4.stop();
       document.querySelector('.player__time-elapsed4').textContent = formatMilliseconds(0);
       player.btnPlay4.classList.remove('is-playing');

   });

})
});