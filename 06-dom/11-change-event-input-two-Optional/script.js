/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("validity").innerHTML
    document.getElementsByName("pass-one")[0].addEventListener('input', doThing);
    function doThing(){
        if (pass-one.value.length >= 8 && /\d/.test("pass-one")) {
            document.getElementById("validity").innerHTML = OK
        }

    }
})();
