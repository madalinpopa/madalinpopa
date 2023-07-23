import 'boxicons'

// Hamburger menu
var hamburger = document.querySelector('.hamburger');
var checkbox = document.querySelector("input[name='hamburger']");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        hamburger.classList.add('checked');
    } else {
        hamburger.classList.remove('checked')
    }
});


