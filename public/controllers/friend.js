$("#person1").on("mouseenter", function() {
    console.log("clicked");
    for(var i=0; i<myAccessories.length; i++) {
        document.getElementById(accessories[myAccessories[i]].id).style.visibility = "hidden";

    }

    document.getElementById(accessories[4].id).style.visibility = "visible"
    document.getElementById(accessories[5].id).style.visibility = "visible"
    document.getElementById(accessories[3].id).style.visibility = "visible"

    NAME.innerHTML = "Danosore";

});

$("#person1").on("mouseleave", function() {
    document.getElementById(accessories[4].id).style.visibility = "hidden"
    document.getElementById(accessories[5].id).style.visibility = "hidden"
    document.getElementById(accessories[3].id).style.visibility = "hidden"

    for(var i=0; i<myAccessories.length; i++) {
        document.getElementById(accessories[myAccessories[i]].id).style.visibility = "visible";

    }

    NAME.innerHTML = name;
});
