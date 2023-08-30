# Frontend Mentor - myteam website solution

This is a solution to the [myteam website challenge on Frontend Mentor](https://github.com/bengera/myteam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview
A good challenge that caused me to stop and really think about the layout at times. The background images on each sections of the 3 page website also proved a bit
of a challenge at times, but I managed to get them as close as I could to the design files.

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- See the correct content for each team member on the About page when the `+` icon is clicked
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](./screenshot.png)

### Links

- [Live site](https://bengera.github.io/myteam/)

### Built with

- Semantic HTML5 markup
- SCSS/CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript


### What I learned
CSS background-position edge offsets.
Allows CSS background images to be positioned relative to the specified edge.

```css
.header-about {
  z-index: -1;
  position: relative;
  background-repeat: no-repeat;
  background-position: bottom -100px right -90px; 
  background-image: url(../assets/bg-pattern-about-1-mobile-nav-1.svg);
    
}
```
This code was used to clear the input fields on the forms page. The "beforeunload" event is triggered when the user attempts to leave the webpage.
```js
window.addEventListener('beforeunload', () => {
    // Reset the values of the input fields
    fullName.value = '';
    email.value = '';
    companyName.value = '';
    title.value = '';
    message.value = '';
});
```


