window.onload = function () {
    //check that js is working
    console.log("reading js");

    //capture the submit event
    document.f.onsubmit = process;

    //capture the reset
    document.f.onreset = resetPage;

    //define process function
    function process() {

        //store user name in a variable
        var userName = document.f.userName.value;

        var userAdj1 = document.f.adj1.value;

        var userAdj2 = document.f.adj2.value;

        var userNoun1 = document.f.noun1.value;

        var userColor = document.f.color.value;

        var userCeleb = document.f.celeb.value;


        if (userName == "" || userColor == "" || userAdj1 == "" || userAdj2 == "" || userNoun1 == "" || userCeleb == "") {
            alert("Fill out the form!")
        } else {
            //capture the message element to change its text in html
            var myMsg = document.getElementById("myMsg");

            myMsg.innerHTML = "What's good, " + userName + "? We are throwing this " + userAdj1 + " party tonight and you'd better be there! We are going to have " + userAdj2 + " " + userNoun1 + " and you already know we gotz da " + userColor + " drankkkkk. " + userCeleb + " is droppin by, so it's bout to be lit!";
        }

        //prevent page from reloading
        return false;
    }

    function resetPage() {
        myMsg.innerHTML = "";
        userName.value = "";
        userColor.value = "";

        return false;
    }
}