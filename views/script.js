var app = angular.module('Phase2', []);

app.controller('Phase2Controller', function($scope) 
{
    $scope.test = "Phase2";
    //$scope.months = ["Jan", "Feb", "Mar", "April", "May", "June"]; 

    function getUserInfo() {
    FB.api('/me', function(response) {
      
      $.ajax({
            type: "POST",
            dataType: 'json',
            data: response,
            url: 'check_user.php',
            success: function(msg) {
             if(msg.error== 1)
             {
              alert('Something Went Wrong!');
             } else {
              $('#fbstatus').show();
              $('#fblogin').hide();
              $('#fbname').text("Name : "+msg.name);
              $('#fbemail').text("Email : "+msg.email);
              $('#fbfname').text("First Name : "+msg.first_name);
              $('#fblname').text("Last Name : "+msg.last_name);
              $('#fbid').text("Facebook ID : "+msg.id);
              $('#fbimg').html("<img src='http://graph.facebook.com/"+msg.id+"/picture'>");
             }
            }
      });

    });
}
    
    // $scope.getdata = function (access_token)
    // {
    //   var access_token = FB.getAuthResponse()['accessToken'];
    //   console.log(access_token);
    //   //var access_token = "EAACEdEose0cBACDkZA4Kj5SqmT2xiQUOH4mMdP6KAsU2oNm5KdD6BSciYT2fJ9eV7WO3VqPexZCZBTpdvr1c4tzi22kmKSXQcKVRaAJr5sE8HOCGD8wcOvJx2wlPFDmol87xjROvNvatPH8iCSCTFgFs3dKTNp9VDZByaVTXTI6NF8TmzEhg";
    //   var my_url = "https://graph.facebook.com/v2.8/me/friends?access_token=" + access_token;

    //   $.ajax({
    //       url: my_url,
    //       dataType: "json",
    //       success: function(result) { 
    //         console.log(result);
    //         //$scope.test = result["data"][0]["name"];

    //         var my_arr = [];
    //         for (var i = 0; i < result["data"].length; i++){
    //           var name = result["data"][i]["name"];
    //           my_arr.push(name);
    //         }
            
    //         $scope.months = my_arr;
    //         $scope.$apply();
    //       }
    //   });
    // };
});

function openCity(evt, data_type) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(data_type).style.display = "block";
    evt.currentTarget.className += " active";
}

