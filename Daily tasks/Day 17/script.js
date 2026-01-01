console.log("Day 17");

// 1. Find the Most Frequent Word in a Paragraph
const divElem = document.getElementById("text");
const sentence = divElem.innerText.replaceAll(".", "").toLowerCase();
const wordsArray = sentence.split(" ");

const counterObj = {};

wordsArray.forEach((word) => {
  if (counterObj[word]) {
    counterObj[word] = counterObj[word] + 1;
  } else {
    counterObj[word] = 1;
  }
  return counterObj;
});
console.log(counterObj);

// 2. Create a zebra pattern
const ulElem = document.querySelectorAll("ul#cars li");

ulElem.forEach((element, index) => {
  element.style.backgroundColor = index % 2 ? "white" : "black";
  element.style.color = index % 2 ? "black" : "white";
});

// 3. Write different ways we can access DOM and what they returns
/*
DOM Access Methods:
getElementbyId(id) → matching html
getElementsbyClassName(className) → matching html as Array-like
getElementsbyTagName(tagName) → Array-like
querySelector(cssSelector) → first matching element (”p.class”)
querySelector(cssSelector) → Node list (”ul#id li”) 
*/

// 4. Find and Replace Text Inside a Page
const pElem = document.getElementById("para");
pElem.innerText = pElem.innerText.replaceAll(
  " This is the extra line I want to replace.",
  "This is the new line after successfull replacement."
);

// 5. Extract and Count Unique Links from a Page
const aTags = document.getElementsByTagName("a");
console.log(aTags.length);
