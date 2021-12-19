// get user input
function getValue() {
  // make alert invisible
  document.getElementById("alert").classList.add("invisible");
  // get user string from the page
  let userString = document.getElementById("userString").value;
  // check for a palindrome
  let returnObj = checkForPalindrome(userString);
  // display our message to the screen
  displayMessage(returnObj);
}

// check if string is a palindrome
function checkForPalindrome(userString) {
  //convert to lowercase
  userString = userString.toLowerCase();
  // remove spaces and special characters
  // a-z 0-9
  let regex = /[^a-z0-9]/gi;
  // anything that is not a-z 0-9 gets replaced with an empty string
  userString = userString.replace(regex, "");
  let reversedString = [];
  let returnObj = {};
  // loop through the string backwards and add the reversed string to the revString array
  for (let i = userString.length - 1; i >= 0; i--) {
    reversedString += userString[i];
  }
  //check if userString equals revString
  if (userString === reversedString) {
    // set the msg property
    returnObj.msg = "Well done! You entered a Palindrome!";
  } else {
    returnObj.msg = "Sorry! You did not enter a palindrome!";
  }
  // set the reversed property of the returnObj object
  returnObj.reversed = reversedString;
  // return the object
  return returnObj;
}

function displayMessage(returnObj) {
  // Display the message
  document.getElementById("alertHeader").innerHTML = returnObj.msg;
  // Display the reversed string
  document.getElementById(
    "msg"
  ).innerHTML = `Your phrase reversed is ${returnObj.reversed}`;
  // remove the invisible display class to reveal the pop up
  document.getElementById("alert").classList.remove("invisible");
}
