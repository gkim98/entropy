var provider = new firebase.auth.FacebookAuthProvider();
var authenticated = false;

// FB.getLoginStatus(function(response) {
//     console.log(response.status);
//     // if(respon
// });

$("#facebook").on("click", function () {
    if(loggedIn == true) {
        FB.login(function(response) {
            // var token = result.credential.accessToken;
            var user = response.user;
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
        });
    } else {

    }
});
