Prayer.controller('LoveCtrl',function($scope,$ionicModal,$ionicPlatform,$ionicLoading,$location,$window,ionicToast,LoginService,$timeout){

  $ionicModal.fromTemplateUrl('templates/lovereadprayer.html', {
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
          var msg=document.getElementById("myluv").className;
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
    soundManager.stop('audio5');
    var snd=angular.element( document.querySelector( '#noise' ) );
    snd[0].pause();
    soundManager.destroySound('audio5');
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
   btnPlay5: document.querySelector('.player__play5'),
   timeElapsed5: document.querySelector('.player__time-elapsed5'),
   timeTotal5: document.querySelector('.player__time-total5'),
   btnStop5: document.querySelector('.vm_iconplaybackluv')
};
var audio5 = null;


soundManager.setup({

   useFastPolling: true,
   useHighPerformance: true,

   onready: function() {
    $scope.myluvcontsong=function()
      {
      var audioid=document.getElementById('contplayluv').className;
      if(audioid=="player__play5 button--large activated")
      {
         audio5 = soundManager.createSound({
         id: 'audio5',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Relationship_Love_Arlene.mp3',

           
        whileloading: function() {
            player.timeTotal5.textContent = formatMilliseconds(audio5.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>'
             // });
            //LoginService.showProgress();

         },
         whileplaying: function() {
            player.timeElapsed5.textContent = formatMilliseconds(audio5.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
            // $ionicLoading.hide();
         //$timeout(LoginService.hideProgress(), 500);
        },
       
         onload: function() {
            player.timeTotal5.textContent = formatMilliseconds(audio5.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed5').textContent = formatMilliseconds(0);
            player.btnPlay5.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop5.dispatchEvent(event);
     }
      });
    }

 var ad = document.getElementById('mySongluv');
 var old_class = ad.className.split(' ')[2];
 if(old_class=="vm-iconsizecolor")
      {
         audio5 = soundManager.createSound({
         id: 'audio5',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Prayers/Relationship_Love_Arlene_PrayAlong.mp3',

           
        whileloading: function() {
            player.timeTotal5.textContent = formatMilliseconds(audio5.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>'
             // });
            //LoginService.showProgress();

         },
         whileplaying: function() {
            player.timeElapsed5.textContent = formatMilliseconds(audio5.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
            // $ionicLoading.hide();
         //$timeout(LoginService.hideProgress(), 500);
        },
       
         onload: function() {
            player.timeTotal5.textContent = formatMilliseconds(audio5.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed5').textContent = formatMilliseconds(0);
            player.btnPlay5.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop5.dispatchEvent(event);
      }
      });
}
if(old_class=="vm-iconsize")
      {
         audio5 = soundManager.createSound({
         id: 'audio5',
         url: 'https://s3.amazonaws.com/vm-prayerpartnerapp-tst/prayerPartnerApp/Relationship_Love_Arlene.mp3',

           
        whileloading: function() {
            player.timeTotal5.textContent = formatMilliseconds(audio5.durationEstimate);
             // $ionicLoading.show({
             //    template: '<ion-spinner icon="ios"></ion-spinner>'
             // });
            //LoginService.showProgress();

         },
         whileplaying: function() {
            player.timeElapsed5.textContent = formatMilliseconds(audio5.position);
            $(".vm_progBar").css('width', ((this.position/this.duration) * 100) + '%');
            // $ionicLoading.hide();
         //$timeout(LoginService.hideProgress(), 500);
        },
       
         onload: function() {
            player.timeTotal5.textContent = formatMilliseconds(audio5.duration);
         },

         onfinish: function() {
            var event;
            document.querySelector('.player__time-elapsed5').textContent = formatMilliseconds(0);
            player.btnPlay5.classList.remove('is-playing');
            $(".vm_progBar").css('width', '0');
            try {
               // Internet Explorer doesn't like this statement
               event = new Event('click');
            } catch (ex) {
               event = document.createEvent('MouseEvent');
               event.initEvent('click', true, false);
            }

            player.btnStop5.dispatchEvent(event);
                    }
      });
     }
}
}
});


player.btnPlay5.addEventListener('click', function() {
   if (audio5 === null) {
     return;
   }
   
   if (audio5.playState === 0 || audio5.paused === true) {
     audio5.play();
     this.classList.add('is-playing');
     //$timeout(LoginService.hideProgress(), 500);
   }

 else {
     audio5.pause();
     this.classList.remove('is-playing');
     //$timeout(LoginService.hideProgress(), 500);

   }
});

     player.btnStop5.addEventListener('click', function() {
       if (audio5 === null) {
         return;
       }
       $(".vm_progBar").css('width', '0');
       audio5.stop();
       document.querySelector('.player__time-elapsed5').textContent = formatMilliseconds(0);
       player.btnPlay5.classList.remove('is-playing');
   });
})
});