//Event Propogation -
//Event Bubbling -  Bottom to top propogation
//Event Capturing - top to bottom propogation

//Event Bubbling

const parentCall = () => {
  alert("Parent Div call");
  console.log("Parent Div call");
};

const childCall = () => {
  alert("Child Div call");
  console.log("Child Div call");
  event.stopPropagation(); // If i want to execute  only childCall then time we used this method
  // Stops the event from further propagation
};

//Event Capturing
const parent = document.querySelector(".parentDiv");
const child = document.querySelector(".childDiv");

parent.addEventListener(
  "click",
  function () {
    alert("clicked parent");
    console.log("clicked parent");
  },
  true
);

child.addEventListener("click", function () {
  alert("clicked child");
  console.log("clicked child");
});
