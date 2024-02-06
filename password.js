var pass1, pass2;

// Get the HTML elements with IDs "p1" and "p2"
pass1 = document.getElementById("p1");
pass2 = document.getElementById("p2");

function valid() {
    if (pass1.value != pass2.value) {
        pass2.setCustomValidity("Password is incorrect");
    } else {
        pass2.setCustomValidity('');
    }
}

// Assign the onchange event to the HTML elements
pass1.onchange = valid;
pass2.onchange = valid;
