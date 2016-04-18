Prayer.controller('BalanceCtrl',function($scope,$ionicModal,$ionicPlatform,$ionicLoading,$location,$window,ionicToast,$timeout,LoginService){

  $ionicModal.fromTemplateUrl('templates/balancereadprayer.html', {
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
        $scope.up=true;

      }
      
      $scope.ControlAudio=function(){
          // var liked=!liked;
          var snd=angular.element( document.querySelector('#noise'));
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
          var msg=document.getElementById("mybal").className;

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
    soundManager.stop('audio3');
    var snd=angular.element( document.querySelector( '#noise' ) );
    snd[0].pause();
    $scope.liked=false;
     soundManager.destroySound('audio3');
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
   btnPlay3: document.querySelector('.player__play3'),
   timeElapsed3: document.querySelector('.player__time-elapsed3'),
   timeTotal3: document.querySelector('.player__time-total3'),
   btnStop3: document.querySelector('.vm_iconplaybackbal')
};
var audio3 = null;


soundManager.setup({

   useFastPolling: true,
   useHighPerformance: true,

   onready: function() {
      $scope.mybalcontsong=function()
      {
      var audioid=document.getElementById('contplaybal').className;
      if(audioid=="player__play3 button--large activated")
      {
                //$ionicLoading.hide();
         audio3 = soundManager.createSound({
         id: 'audio3',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Health_Balance_Kelli.mp3',

           
        whileloading: function() {
            player.timeTotal3.textContent = formatMilliseconds(audio3.durationEstimate);
              // $ionicLoading.show({
              //   template: '<ion-spinner icon="ios"></ion-spinner>'
              // });
            //LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed3.textContent = formatMilliseconds(audio3.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
             // $ionicLoading.hide();   
             //$timeout(LoginService.hideProgress(), 100);
         },
       
         onload: function() {
            player.timeTotal3.textContent = formatMilliseconds(audio3.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed3').textContent = formatMilliseconds(0);
            player.btnPlay3.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop3.dispatchEvent(event);
    }
      });
    }

 var ad = document.getElementById('mySongbal');
 var old_class = ad.className.split(' ')[2];
 if(old_class=="vm-iconsizecolor")
      {
         audio3 = soundManager.createSound({
         id: 'audio3',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Prayers/Health_Balance_Kelli_PrayAlong.mp3',

           
        whileloading: function() {
            player.timeTotal3.textContent = formatMilliseconds(audio3.durationEstimate);
              // $ionicLoading.show({
              //   template: '<ion-spinner icon="ios"></ion-spinner>'
              // });
           // LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed3.textContent = formatMilliseconds(audio3.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
             // $ionicLoading.hide();   
            // $timeout(LoginService.hideProgress(), 100);
         },
       
         onload: function() {
            player.timeTotal3.textContent = formatMilliseconds(audio3.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed3').textContent = formatMilliseconds(0);
            player.btnPlay3.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop3.dispatchEvent(event);
        }
      });
     }

      if(old_class=="vm-iconsize")
      {
                 audio3 = soundManager.createSound({
         id: 'audio3',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Health_Balance_Kelli.mp3',

           
        whileloading: function() {
            player.timeTotal3.textContent = formatMilliseconds(audio3.durationEstimate);
              // $ionicLoading.show({
              //   template: '<ion-spinner icon="ios"></ion-spinner>'
              // });
            //LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed3.textContent = formatMilliseconds(audio3.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
             // $ionicLoading.hide();   
            // $timeout(LoginService.hideProgress(), 100);
         },
       
         onload: function() {
            player.timeTotal3.textContent = formatMilliseconds(audio3.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed3').textContent = formatMilliseconds(0);
            player.btnPlay3.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop3.dispatchEvent(event);
               }
      });
     }
}
}
});


player.btnPlay3.addEventListener('click', function() {
   if (audio3 === null) {
     return;
   }
   
   if (audio3.playState === 0 || audio3.paused === true) {
     audio3.play();
     this.classList.add('is-playing');
      //$timeout(LoginService.hideProgress(), 100);
      }
       else {
     audio3.pause();
     this.classList.remove('is-playing');
     // $timeout(LoginService.hideProgress(), 100);

   }
});
   player.btnStop3.addEventListener('click', function() {
       if (audio3 === null) {
         return;
       }
       $(".vm_progBar").css('width', '0');
       audio3.stop();
       document.querySelector('.player__time-elapsed3').textContent = formatMilliseconds(0);
       player.btnPlay3.classList.remove('is-playing');

   });

})
});