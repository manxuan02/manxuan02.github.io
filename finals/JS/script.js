//For hamburger menu
function toggleMenu()
{
    const menuLinks = document.querySelector(".hamburger-menuLinks");
    const menuIcon = document.querySelector(".hamburger-menuIcon");

    //to Toggle "open" & "close" the hamburger menu
    menuLinks.classList.toggle("open");
    menuIcon.classList.toggle("open");
}

// Animation for 'contact me'
//FOR the 'input' container/box
var inputs = document.querySelectorAll(".input");

//when the box is clicked = focus
function focusFunc()
{
    var parent = this.parentNode;
    parent.classList.add("focus");
}
//to blur the 'label ' word >> the word INSIDE the box
function blurFunc()
{
    var parent = this.parentNode;
    if(this.value == "")
    {
        parent.classList.remove("focus");
    }
}
//when EITHER of the 'input' boxes are clicked
inputs.forEach((input) => {
    //when the box is clicked >> focusFunc() is called
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})