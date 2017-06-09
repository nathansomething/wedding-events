var app = angular.module('myApp', ['ui.bootstrap']);

app.controller("Popovers", function($scope, $sce, $templateCache) {
  var DAY = 1000*60*60*24;
  var the_day = new Date(2017, 6, 30);
  var today = new Date();
  console.log(today);
  console.log(the_day);
  $scope.num_days = Math.floor((the_day.getTime() - today.getTime())/DAY);
  if ($scope.num_days < 0) {
    $scope.num_days = 0;
  }

  $scope.information = $sce.trustAsHtml("<div><p>Venue: Cape Horn Estate</p><p>Time: 11AM-6PM</p></div>")

  $scope.schedule = $sce.trustAsHtml("<p>Guests Arrive: 11:00-12:00</p><p>Ceremony: 12:00-1:00</p><p>Lunch: 1:00-2:00</p><p>Dancing: 2:00-5:00</p>");

  $scope.our_story = $sce.trustAsHtml("<p>A blurb about how we met</p>");

  $scope.registry = $sce.trustAsHtml("<p>Some stuff about our registry</p>");

  var html = $templateCache.get('rsvp_form.html');

  console.log(html);

  $scope.rsvp_form = $sce.trustAsHtml(html);
});
