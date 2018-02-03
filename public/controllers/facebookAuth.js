// var provider = new firebase.auth.FacebookAuthProvider();
// var authenticated = false;

// FB.getLoginStatus(function(response) {
//     console.log(response.status);
//     // if(respon
// });

$("#facebook").on("click", function () {
    console.log("event triggered");
    if(loggedIn == false) {
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

// $("#facebook").on("click", function() {
//     console.log(loggedIn);
//     if(loggedIn == true) {
//         FB.login(function(response) {
//             var user = response.user;
//         }).catch(function(error) {
//             var errorCode = error.code;
//         });
//     }
//
//     FB.Event.subscribe('auth.authResponseChange', checkLoginState);
//
//     function checkLoginState(event) {
//       if (event.authResponse) {
//         // User is signed-in Facebook.
//         var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
//           unsubscribe();
//           // Check if we are already signed-in Firebase with the correct user.
//           if (!isUserEqual(event.authResponse, firebaseUser)) {
//             // Build Firebase credential with the Facebook auth token.
//             var credential = firebase.auth.FacebookAuthProvider.credential(
//                 event.authResponse.accessToken);
//             // Sign in with the credential from the Facebook user.
//             firebase.auth().signInWithCredential(credential).catch(function(error) {
//               // Handle Errors here.
//               var errorCode = error.code;
//               var errorMessage = error.message;
//               // The email of the user's account used.
//               var email = error.email;
//               // The firebase.auth.AuthCredential type that was used.
//               var credential = error.credential;
//               // ...
//             });
//           } else {
//             // User is already signed-in Firebase with the correct user.
//           }
//         });
//       } else {
//         // User is signed-out of Facebook.
//         firebase.auth().signOut();
//       }
//     }
//
//     function isUserEqual(facebookAuthResponse, firebaseUser) {
//       if (firebaseUser) {
//         var providerData = firebaseUser.providerData;
//         for (var i = 0; i < providerData.length; i++) {
//           if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
//               providerData[i].uid === facebookAuthResponse.userID) {
//             // We don't need to re-auth the Firebase connection.
//             return true;
//           }
//         }
//       }
//       return false;
//     }
// });
