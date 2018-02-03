function writeUserData(user, name, accessories) {
    firebase.database().ref('users/' + user).set({
        name: name,
        accessories: accessories
    });
}

$("body").on("click", function() {
    console.log("added");
    writeUserData(user, "John", 0);
});
