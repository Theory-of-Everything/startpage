function main() {
    let requestUrl = "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en";
    let request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send;

    request.onload = function() {
        const quoteText = request.response;
        console.log(quoteText);
        console.log("Test");
        document.getElementById("quote").innerHTML = quoteText;
    }
    main();
}