function writeUserData(help, name, accessories) {
    firebase.database().ref('users/' + help).set({
        name: name,
        accessories: accessories
    });
}

function setName(user) {
    // var readName = firebase.database().ref('users/' + user);
    // readName.on('value', function(snapshot) {
    //     console.log(snapshot.val());
    //     return snapshot.val();
    // });

    firebase.database().ref('/users/' + user).on('value', function(response) {
        NAME.innerHTML = response.val().name;
    });
}

function writeAccessories() {

}
