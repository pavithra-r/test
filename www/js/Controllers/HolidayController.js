/**
 * Created by amods on 14-07-2014.
 */
Prayer.controller('HolidayController', function ($scope,$rootScope,CustomService) {
   CustomService.getall().then(function (res) 
      {
    debugger;
    $rootScope.results = [];
    $rootScope.holidayJSON = [];
    $rootScope.Locations =[];
                 $rootScope.Holidaylist = res.aaData.Holidays;
                    
                    for (var i = 0; i < $rootScope.Holidaylist.length; i++) {
                        var holidayToPush = JSON.parse($rootScope.Holidaylist[i].JSON).Holiday;
                        $rootScope.Locations.push({
                            "Name":holidayToPush.Name,
                        }); 
                        holidayToPush.dateDate = moment(holidayToPush.Date,'MM/DD/YYYY').format('DD');
                        /*returns date vale. e.g. 18*/
                        holidayToPush.dateMonth = moment(holidayToPush.Date,'MM/DD/YYYY').format('MMM');
                        /*returns month value in 3 letters. e.g. Oct*/
                        holidayToPush.dayClass = moment(holidayToPush.Date,'MM/DD/YYYY').format('ddd').toLowerCase();
                        /*returns day value for the date in lower case. e.g. wed*/
                        holidayToPush.month = moment(holidayToPush.Date,'MM/DD/YYYY').format('MM');
                        /*returns month value. e.g. 07*/
                        $rootScope.holidayJSON.push(holidayToPush);
                       }
      })
});
