# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![desktop-coming-soon-page](./solution/desktop-coming-soon-page.png)

### Links

- Live Site URL: [Ping Coming Soon Page](https://tsune-web.github.io/FM-ping-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- svg icons

### What I learned

```svg
<svg><path fill="#4f7df3" /></svg>
```

```css
.icon__wrapper {
  padding: 0.5rem;
  line-height: 0.8;
  border: 1px solid #9696964e;
  border-radius: 50%;
  cursor: pointer;
}
.icon__wrapper:hover,
.icon__wrapper:focus {
  background-color: var(--blue);
  outline-offset: 0;
}
.icon {
  display: inline-block;
  padding: 0.9rem;
  background-size: 1.75rem 1.75rem;
  background-repeat: no-repeat;
}
.icon:hover,
.icon:active {
  filter: brightness(0) invert(1);
}
```

Explanation:
  1. Set the fill property in the svg file to directly change the initial color of the icon.
  2. HTML: wrap each <i class="icon"></i> with a div individually.
  3. Set the padding and border properties for the div, here .icon__wrapper class.
  4. Add background-color to the wrapper with hover and focus pseudo elements.
  5. Set padding and background-size of an icon. I adjusted padding along with icon__wrapper padding to center the icon. Background-size is the actual size of the icon.
  6. Add filter: brightness(0) invert(1); to turn the icon to transparent when hovering/ focused on. Since the .icon__wrapper's background-color is blue when hovering, it looks like switching the color of icon and background.

```js
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("This email is not valid!");
  return false;
}
```

Explanation:

- ^ Beginning. Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled.
- $ End. Matches the end of the string, or the end of a line if the multiline flag (m) is enabled.

- \w Word. Matches any word character (alphanumeric & underscore).
- \. Escaped character. Matches a "." character.
- \- Character. Mathces a "-" character.
- @ Character. Matches a "@" character.

- \+ Quantifier. Matches 1 or more of the preceding token.
- \* Quantifier. Matches 0 or more of the preceding token.
- ? Quantifier. Matches between 0 and 1 of the preceding token.
- {2,3} Quantifier. Matches between 2 and 3 of the preceding token.

- () Capturing group. Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
- [] Character set. Matches any character in the set.

- the test() method:
  ===========
  regex.test(str)
  ===========
  compares a given string with the preceding regex to search for a match between the two.
  This returns true if there is a match between the regular expression and the string. Otherwise, false.


### Continued development

1. Rendering svg
  - I read a couple of articles and resources of how to render svgs. However, I still need to work on it to have more control of modifying svgs.
2. Regex
  - I took some examples of regex, but I want to know different ways to implement more robust and strict validation.

### Useful resources

- [CSS-Tricks](https://css-tricks.com/) - This helped me for CSS property order. For more details about CSS properties grouped by type [Nicolas Gallagher's Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [w3resource](https://www.w3resource.com/javascript/form/email-validation.php) - This helped me gain a better understanding of JavaScript regex(Regular Expressions) to validate an email.
- [RegExr](https://regexr.com/) - This website is to test your regex and give you a thorough explanation of each part of the given regex separately.
