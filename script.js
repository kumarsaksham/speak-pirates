// Reference to HTML elements
var input = document.querySelector("#input-text");
var btnTranslate  = document.querySelector("#btn-translate");
var output = document.querySelector("#output-text");

// Event Listener
btnTranslate.addEventListener("click", clickEventHandler);



const serverURL = "https://api.funtranslations.com/translate/pirate.json"

function constructURL(text) {
    var url = serverURL + "?" + "text=" + text;
    // console.log(url);
    return url;
}

// error Handler
function errorHandler(error) {
    console.log("error occured " + error);
    alert("Server is down! Please try after some time.")
}



// callback function
function clickEventHandler() {
    console.log("clicked");
    var toTranslate = input.value;

    fetch(constructURL(toTranslate))
        .then(response => response.json())
        .then(json => 
            output.innerText = (json.contents.translated))
            // console.log(json.contents.translated))
        .catch(errorHandler)
}

