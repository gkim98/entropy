// var loggedIn = false;
//
// window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '1548241081963251',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v2.12'
//     });
//
//     FB.AppEvents.logPageView();
//
//     FB.getLoginStatus(function(response) {
//         if(response.status == 'connected') {
//             loggedIn = true;
//             $("#facebook").text("Logout");
//         }
//     });
//
//   };
//
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));


FB.init({
    appId      : '1548241081963251',
    status     : true,
    xfbml      : true,
    version    : 'v2.12'
});
