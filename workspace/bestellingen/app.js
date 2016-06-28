var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://waybackburgers.firebaseio.com/bestellingen");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);

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