var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://waybackburgers.firebaseio.com/bestellingen");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  
  $scope.newMessageWhopper = 0;
  $scope.newMessageBbq = 0;
  $scope.newMessageBacon = 0;
  $scope.newMessageAngus = 0;
  $scope.newMessageBig = 0;
  $scope.newMessageChicago = 0;

  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
    naam: $scope.newMessageNaam,
    adres: $scope.newMessageAdres,
    telefoonnummer: $scope.newMessageTelefoonnummer,
    opmerking: $scope.newMessageOpmerking,
    whopper: $scope.newMessageWhopper,
    chicago: $scope.newMessageChicago,
    bbq: $scope.newMessageBbq,
    bacon: $scope.newMessageBacon,
    angus: $scope.newMessageAngus,
    big: $scope.newMessageBig


    });
  };

  // click on `index.html` above to see $remove() and $save() in action
});