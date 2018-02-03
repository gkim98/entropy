var loggedIn = false;
var user = "";

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1548241081963251',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });

    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
        if(response.status == 'connected') {
            console.log('triggered');
            loggedIn = true;
            user = response.authResponse.userID;
            $("#facebook").text("Logout");


            console.log("triggered");
            document.getElementById("questionBox2").style.visibility = "hidden";
            NAME.style.visibility = "visible"
            setName(user);



        } else {
            $("#facebook").text("Connect with Facebook");
        }
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



// FB.init({
//     appId      : '1548241081963251',
//     status     : true,
//     xfbml      : true,
//     version    : 'v2.12'
// });
//
// FB.Event.subscribe('auth.authResponseChange', checkLoginState);
//
// function checkLoginState(event) {
//   if (event.authResponse) {
//     // User is signed-in Facebook.
//     var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
//       unsubscribe();
//       // Check if we are already signed-in Firebase with the correct user.
//       if (!isUserEqual(event.authResponse, firebaseUser)) {
//         // Build Firebase credential with the Facebook auth token.
//         var credential = firebase.auth.FacebookAuthProvider.credential(
//             event.authResponse.accessToken);
//         // Sign in with the credential from the Facebook user.
//         firebase.auth().signInWithCredential(credential).catch(function(error) {
//           // Handle Errors here.
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           // The email of the user's account used.
//           var email = error.email;
//           // The firebase.auth.AuthCredential type that was used.
//           var credential = error.credential;
//           // ...
//         });
//       } else {
//         // User is already signed-in Firebase with the correct user.
//       }
//     });
//   } else {
//     // User is signed-out of Facebook.
//     firebase.auth().signOut();
//   }
// }
//
// function isUserEqual(facebookAuthResponse, firebaseUser) {
//   if (firebaseUser) {
//     var providerData = firebaseUser.providerData;
//     for (var i = 0; i < providerData.length; i++) {
//       if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
//           providerData[i].uid === facebookAuthResponse.userID) {
//         // We don't need to re-auth the Firebase connection.
//         return true;
//       }
//     }
//   }
//   return false;
// }
