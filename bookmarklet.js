function f() {
    // This is the code that actually gets executed by the bookmarklet.
    var x = 10.0;
    alert("Hello, world!");
}
// This is the code that sets up the bookmarklet.
document.getElementById("bookmarklet").href = "javascript:(" + f.toString() + ")();"
// Let any other scripts know that the script was loaded successfully.
var document.bookmarkletLoaded = true;
// https://juhukinners.wordpress.com/2009/01/08/how-to-write-a-bookmarklet/
// TODO: check length limits? 
