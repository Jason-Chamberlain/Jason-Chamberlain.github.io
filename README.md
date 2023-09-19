# Portfolio Project
This project consists of an HTML file, a CSS file, and a JavaScript file that together create a portfolio website for myself. The HTML file provides the structure and content of the website, the CSS file defines the styles and visual appearance, and the JavaScript file adds interactivity and dynamic behavior to the website.

## HTML Structure
---
The HTML file follows the standard structure of an HTML document. It includes various sections and elements to create the different parts of the portfolio website. Here is an overview of the main sections:

1. **Head**: Contains metadata about the document, such as the character encoding, viewport settings, page title, author information, and links to external resources like stylesheets and the favicon.

1. **Body**: The main content of the website is contained within the body tag. It consists of several sections:

    - **Navbar**: A navigation bar at the top of the page that provides links to different sections of the website.

    - **Home**: The introductory section of the website, featuring a background video and a text overlay introducing myself.

    - **Slideshow**: A slideshow showcasing various images related to my skills and expertise.

    - **About**: A section providing information about myself and my background as a software developer.

    - **GitHub**: A section displaying information about my GitHub portfolio and inviting visitors to explore my code samples.

    - **Contact**: A section with a contact form for visitors to get in touch with me.

    - **Footer**: The footer section at the bottom of the page, displaying copyright information and a link to the contact form.

    - **JavaScript**: The HTML file includes a script tag referencing a JavaScript file that provides functionality for the slideshow, contact form, and other interactive elements.

## CSS Styles
---
The CSS file contains various styles that define the visual appearance of the portfolio website. Here are the main style categories:

1. **General Style**: Defines styles for elements like the body, headings, paragraphs, links, and fonts. It sets default colors, text alignment, and other visual properties.

1. **General Hover Effects**: Specifies hover effects for headings, paragraphs, and centered text. It adds grayscale, scaling, and color changes to elements when hovered over.

1. **Navbar Style & Transition**: Defines styles and animation effects for the navigation bar. It sets the background color, text color, positioning, and hover effects for navbar links.

1. **Video Style & Transition**: Sets styles and animations for the background video and the text overlay in the home section. It adjusts the appearance of the video and animates the text when it enters the viewport.

1. **Slideshow Style**: Defines styles for the slideshow section, including the container, images, text overlays, and navigation buttons. It sets dimensions, positioning, and animations for the slideshow elements.

1. **Table Style**: Specifies styles for the layout of the About and GitHub sections, which use a flexbox layout with columns. It sets the width, background color, and alignment of the columns.

1. **Contact Style**: Defines styles for the contact section, including the contact button, popup form, and form fields. It sets dimensions, colors, and hover effects for the contact elements.

## JavaScript Functionality
---
The JavaScript file adds interactivity and dynamic behavior to the portfolio website. Here are the main functions implemented:

1. **Contact Form**: The **'openForm()'** function is triggered when the contact button is clicked, displaying the contact form by setting its display property to "block". The **'closeForm()'** function is triggered when the user clicks off the contact form or clicks the cancel button, hiding the form by setting its display property to "none".

1. **Slideshow**: The **'showSlides()'** function is responsible for displaying the slideshow images. It takes a parameter called **'slideNumber'** and uses it to show the corresponding slide by setting the display property of each slide and dot element accordingly. The **'plusSlides()'** function is called when the left or right arrows are clicked, updating the slide index and calling **'showSlides()'** to display the updated slide. The **'currentSlide()'** function is called when a dot is clicked, setting the slide index and calling **'showSlides()'** to display the corresponding slide.

1. **Closing Contact Form**: The JavaScript code includes an event listener that triggers the **'closeForm()'** function when the user clicks off the contact form. It checks if the clicked element matches the "cancel" class or if the clicked element is not a descendant of the form popup, the pop-up button, or the contact section. If any of these conditions are met, the contact form is closed by calling **'closeForm()'**.

These JavaScript functions enhance the user experience by providing functionality for opening and closing the contact form, navigating the slideshow, and closing the contact form when the user interacts with other parts of the page.

## Learnings from the Class
---
Based on the provided HTML, CSS, and JavaScript files, it can be inferred that the class that included this project covered several topics related to web development, including:

- **HTML structure**: The class likely covered the basic structure of an HTML document, including the use of doctype declaration, head section, and body section. Students would have learned how to organize and structure content using HTML elements.

- **CSS styling**: The class covered CSS selectors, properties, and values to apply styles to HTML elements. Students learned how to modify the appearance of text, backgrounds, layouts, and create visual effects using CSS.

- **Responsive design**: The class likely emphasized the importance of designing websites that work well on different devices and screen sizes. This is evident in the use of media queries and relative units like viewport width (vw) and viewport height (vh) throughout the CSS file.

- **Animation and transitions**: The CSS file demonstrates the use of animations and transitions to create visual effects. Students would have learned how to define keyframes and apply them to elements using CSS animations, as well as how to create smooth transitions for hover effects.

- **Flexbox layout**: The CSS file includes the use of flexbox layout for the about and GitHub sections. This suggests that the class covered the basics of flexbox, including the use of flex containers and flex items to create responsive and flexible layouts.

- **JavaScript integration**: The JavaScript file provided functionality for the slideshow, contact form, and other interactive elements. This indicates that the class covered the integration of JavaScript code into web pages to add interactivity and dynamic behavior.

- **DOM manipulation**: The JavaScript code interacts with the Document Object Model (DOM) to access and modify elements on the page. Students would have learned how to use JavaScript to select elements, add event listeners, and update styles and content dynamically.

Overall, the class that included this project provided a comprehensive introduction to web development concepts, including HTML structure, CSS styling, responsive design, animations, flexbox layout, JavaScript integration, and DOM manipulation.