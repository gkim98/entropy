$("#person1").on("click", function() {
    for(var i=0; i<myAccessories.length; i++) {
        document.getElementById(accessories[myAccessories[i]].id).style.visibility = "hidden";

    }
});
