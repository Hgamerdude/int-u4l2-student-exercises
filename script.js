let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");
let commentOne = document.querySelector(".comment-one");

let buttonTwo = document.querySelector(".button-two");
let captionTwo = document.querySelector(".caption-two");
let commentTwo = document.querySelector(".comment-two");

buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".
    let spidyCaption = commentOne.value;

    // 2. Display the variable spidyCaption to captionOne.
    captionOne.innerHTML = spidyCaption;

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.

buttonTwo.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".
    let otherCaption = commentTwo.value;

    // 2. Display the variable spidyCaption to captionOne.
    captionTwo.innerHTML = otherCaption;
});