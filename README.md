# Quiz 2 - Interactive card detail solution

This is a solution to the [Interactive card detail page Quiz 2 challenge]

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](https://cdn.discordapp.com/attachments/735871514104168519/1060844707174957078/image.png)
![](https://media.discordapp.net/attachments/735871514104168519/1060844858681589770/image.png?width=1356&height=676)
![](https://cdn.discordapp.com/attachments/735871514104168519/1060844911152345160/image.png)

### Links

- Solution URL: [https://github.com/Tropicaljittai/interactive-card-details-form](https://github.com/Tropicaljittai/interactive-card-details-form)
- Live Site URL: [https://tropicaljittai.github.io/interactive-card-details-form/](https://tropicaljittai.github.io/interactive-card-details-form/)

## My process

### Built with

- HTML
- CSS
- Javascript
- jQuery
- Google font
- Visual Studio Code

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<div class="card2">
              <label for="card_number">Card Number</label>
              <input
                type="number"
                oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                minlength="16"
                maxlength="16"
                placeholder="e.g. 1234 5678 9123 0000"
                id="card_number"
                required
              />
            </div>
```
```css
.proud-of-this-css {
  root {
  --Red: hsl(0, 100%, 66%);
  --White: hsl(0, 0%, 100%);
  --Light-grayish-violet: hsl(270, 3%, 87%);
  --Dark-grayish-violet: hsl(279, 6%, 55%);
  --Very-dark-violet: hsl(278, 68%, 11%);
}
*,*>*{
  font-family: 'Space Grotesk', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Learned a lot from this challenge, such as taking input with conditions, handling error and outputing error messages. I hope that when I face similar challenges in the future I will be able to implement this again.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=bQhD7gCUMNY&t=383&ab_channel=JavaScriptFront) - This tutorial basically carried me for the javascript part of the code
- [Example resource 2](https://github.com/alishirani1384/Interactive-card-details-form) - This is the github in which the completed solution was posted that helped me when I encounter an error or bug and helped me check what's wrong/missing in my code.

## Your Detail 

- FullName - [Joseph Ruys]
- StudentID - [2602116964]
- BINUS Email - [joseph.ruys@binus.ac.id]

## Acknowledgments

Credits to the "JavaScript Front" youtube channel, as this yt channel basically carried me for the javascript part and helped me when checking for bugs + errors when making the code
