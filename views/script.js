var app = angular.module('Phase2', []);

app.controller('Phase2Controller', function($scope) 
{
    $scope.test = "Phase2";
    $scope.months = ["Jan", "Feb", "Mar", "April", "May", "June"]; 
    $scope.getdata = function ()
    {
      var access_token = "EAACEdEose0cBAGKNq2ZB2FMtMWVR6d6LR78ZBYwfRhZBubZC48aTSFkrrJjqt5CrW6m9aOqzac8WhK6eIhq3Mj2ulBoiO9mCNMZCeONPYeuwZAZBKTjoz4EF1HKOhDAEXtooRQGmHZBy4z4nVH076ZAaf4hGQZCZC6JfcBswOwKaMGgASn8jFdRDss0";
      var my_url = "https://graph.facebook.com/v2.8/me/friends?access_token=" + access_token;

      $.ajax({
          url: my_url,
          dataType: "json",
          success: function(result) { 
            console.log(result["data"][0]);
            $scope.test = result["data"][0]["name"];

            var my_arr = [];
            for (var i = 0; i < result["data"].length; i++){
              var name = result["data"][i]["name"];
              my_arr.push(name);
            }
            
            $scope.months = my_arr;
            $scope.$apply();
          }
      });
    };
});

