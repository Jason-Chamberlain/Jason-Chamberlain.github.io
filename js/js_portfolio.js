// Opens and closes contact form
function openForm() {
    document.getElementById('myForm').style.display = 'block';          // Sets display property of element with ID 'myForm' to 'block', making it visible
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none';           // Sets display property of element with ID 'myForm' to 'none', hiding it
}

// Closes the contact form when user clicks off of it
document.addEventListener('click', function (event) {
    if (event.target.matches('.cancel') || !event.target.closest('.form_popup') // Checks if clicked element matches class 'cancel' or if not a descendant of element with class 'form_popup'
        && !event.target.closest('.pop_up_button') && !event.target.closest('.contact')) { // Checks if not a descendant of element with class 'pop_up_button' or 'contact'
        closeForm();                                                    // Closes contact form
    }
})

// Displays first image of slideshow on page load
var slideIndex = 1;                                                     // Declares variable slideIndex and assigns it value of 1, indicating index of current slide
showSlides(slideIndex);                                                 // Calls showSlides() with current slide index as argument to display corresponding slide

// Changes the slide when the left/right arrows are clicked
function plusSlides(num) {
    showSlides(slideIndex += num);                                      // Increments slide index by specified number (num) and calls showSlides() to display updated slide
}

// Changes the slide when the dots are clicked
function currentSlide(num) {
    showSlides(slideIndex = num);                                       // Sets slide index to specified number (num) and calls showSlides() to display corresponding slide
}

// Defines function named showSlides that takes a parameter called slideNumber
function showSlides(slideNumber) {
    var slides = document.getElementsByClassName('mySlides');           // Retrieves all elements with the class name 'mySlides' and assigns them to the variable 'slides'
    var dots = document.getElementsByClassName('dot');                  // Retrieves all elements with the class name 'dot' and assigns them to the variable 'dots'
    if (slideNumber > slides.length) { slideIndex = 1; }                // Checks if the slideNumber is greater than the number of slides. If true, sets the slideIndex to 1
    if (slideNumber < 1) { slideIndex = slides.length; }                // Checks if the slideNumber is less than 1. If true, sets the slideIndex to the length of slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';                               // Loops through each slide element in the 'slides' array and sets their display style to 'none' (hides them)
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');   // Loops through each dot element in the 'dots' array and removes the 'active' class from their className property
    }
    slides[slideIndex - 1].style.display = 'block';                     // Displays the slide at index (slideIndex - 1) by setting its display style to 'block' (shows it)
    dots[slideIndex - 1].className += ' active';                        // Adds the 'active' class to the dot at index (slideIndex - 1) by appending it to the className property
}