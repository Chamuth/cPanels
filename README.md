## INTRODUCTION TO CPANELS

cPanels is a JavaScript + CSS (Front-end) Framework (Inspired by Facebook) for web designers and developers to implement panels attached to the bottom (sidebars in future) that are closable, minimizable, and restorable. With cPanels framework there is no need to use JavaScript for it's basic functionality (implementing panels), although you can manually trigger to open the panels using JavaScript anyway.


## FEATURES OF CPANELS

### Create panels only using HTML
First of all attaching the CSS file and the JavaScript file to the HTML webpage is essential. To create a panel, the user only has to use HTML tags and HTML5 data attributes. See the Tutorial

### Customizable Panel styles
cPanels let you customize the User Interface of the panels, and their headings. To create a new theme just add a new rule to the stylesheet as mentioned in the Tutorial

### No need of jQuery, or Twitter Bootstrap
cPanels library does not need jQuery, it uses it's own ways to select elements and edit their CSS properties accordingly. It is not that much performance oriented as jQuery, but it gets the job done

### Minimizable, Closable and Animated Panels
The defined panels can be minimized and restored to the same state by clicking on the heading of the panel and they can be closed using the close button in the top right corner of the panel

### Hiding panels on window resize
cPanels automatically hides old panels when the size of all of the panels exceed the width of the window and gives enough space for the new ones. Try on this web page

### Trigger Panels using JavaScript
Panels can be manually opened / triggered by calling cPanel functions by addressing the specific container of the panel to the functions. See the Tutorial

## DOWNLOAD CPANELS


1. Via CDN (Content Delivery Network) 

a. At the <head> tag:
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Chamuth/cpanels@1.0/../dist/js/cpanels.js"/>
    
b. At the <body> or <head> tag:
    <script src="https://cdn.jsdelivr.net/gh/Chamuth/cpanels@1.0/../dist/js/cpanels.js"></script>

2. Using Bower 
    bower install cpanels
