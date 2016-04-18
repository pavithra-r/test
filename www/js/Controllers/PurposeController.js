Prayer.controller('PurposeCtrl',function($scope,$ionicModal,$ionicPlatform,$ionicLoading,$location,$window,ionicToast,LoginService,$timeout){

  $ionicModal.fromTemplateUrl('templates/purposereadprayer.html', {
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
          var msg=document.getElementById("mypurpose").className;

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
    soundManager.stop('audio2');
    var snd=angular.element( document.querySelector( '#noise' ) );
    snd[0].pause();
    soundManager.destroySound('audio2');
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
   btnPlay2: document.querySelector('.player__play2'),
   timeElapsed2: document.querySelector('.player__time-elapsed2'),
   timeTotal2: document.querySelector('.player__time-total2'),
   btnStop2: document.querySelector('.vm_iconplaybackpur')
};
var audio2 = null;


soundManager.setup({
   useFastPolling: true,
   useHighPerformance: true,
   

   onready: function() {
      $scope.mypurcontsong=function()
      {
      var audioid=document.getElementById('contplaypur').className;
      if(audioid=="player__play2 button--large activated")
      {
         audio2 = soundManager.createSound({
         id: 'audio2',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Fulfilment_Purpose_Arlene.mp3',
 
        whileloading: function() {
            player.timeTotal2.textContent = formatMilliseconds(audio2.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>'
             // });
             //LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed2.textContent = formatMilliseconds(audio2.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
            // $ionicLoading.hide();
             //$timeout(LoginService.hideProgress(), 100);

   
         },
       
         onload: function() {
            player.timeTotal2.textContent = formatMilliseconds(audio2.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed2').textContent = formatMilliseconds(0);
            player.btnPlay2.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');

            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }
            player.btnStop2.dispatchEvent(event);
        }
      });
    }

var ad = document.getElementById('mySongpur');
var old_class = ad.className.split(' ')[2];
 if(old_class=="vm-iconsizecolor")
      {
         audio2 = soundManager.createSound({
         id: 'audio2',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Prayers/Fulfillment_Purpose_Arlene_PrayAlong.mp3',
 
        whileloading: function() {
            player.timeTotal2.textContent = formatMilliseconds(audio2.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>'
             // });
             //LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed2.textContent = formatMilliseconds(audio2.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
            // $ionicLoading.hide();
             //$timeout(LoginService.hideProgress(), 100);

   
         },
       
         onload: function() {
            player.timeTotal2.textContent = formatMilliseconds(audio2.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed2').textContent = formatMilliseconds(0);
            player.btnPlay3.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');

            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }
            player.btnStop2.dispatchEvent(event);
        }
      });
}
if(old_class=="vm-iconsize")
      {
         audio2 = soundManager.createSound({
         id: 'audio2',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Fulfilment_Purpose_Arlene.mp3',
 
        whileloading: function() {
            player.timeTotal2.textContent = formatMilliseconds(audio2.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>'
             // });
             //LoginService.showProgress();
         },
         whileplaying: function() {
            player.timeElapsed2.textContent = formatMilliseconds(audio2.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
            // $ionicLoading.hide();
             //$timeout(LoginService.hideProgress(), 100);

   
         },
       
         onload: function() {
            player.timeTotal2.textContent = formatMilliseconds(audio2.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed2').textContent = formatMilliseconds(0);
            player.btnPlay2.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');

            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }
            player.btnStop2.dispatchEvent(event);
        }
      });
     }
}
}
});


player.btnPlay2.addEventListener('click', function() {
   if (audio2 === null) {
     return;
   }
   
   if (audio2.playState === 0 || audio2.paused === true) {
     audio2.play();
     this.classList.add('is-playing');
     //$timeout(LoginService.hideProgress(), 100);
   } else {
     audio2.pause();
     this.classList.remove('is-playing');
     //$timeout(LoginService.hideProgress(), 100);
   }
});

   player.btnStop2.addEventListener('click', function() {
       if (audio2 === null) {
         return;
       }
       $(".vm_progBar").css('width', '0');
       audio2.stop();
       document.querySelector('.player__time-elapsed2').textContent = formatMilliseconds(0);
       player.btnPlay2.classList.remove('is-playing');

   });
})
});