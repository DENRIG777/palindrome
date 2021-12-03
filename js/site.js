//get our user input
function getValue(){

    //make sure alert is invisible
    document.getElementById("alert").classList.add("invisible");

    //get user string for the page
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);

    //display out message to the screen
    displayMessage(returnObj);

}

//check if string is a palindrome.
function checkForPalindrome(userString){

    //remove lowercase letters from the userString.
    userString = userString.toLowerCase();

    //remove space and special characters from the userString.
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    //reverse the string
    let revString = [];
    let returnObj = {};
    //i need a decrementing for loop a loop that starts from the end.

    for (let index = userString.length - 1; index >=0; index--) {
        revString += userString[index];
    }

    if (revString == userString) {
        returnObj.msg = "Good job..."
    }
    else{
        returnObj.msg = "Try again you got this..."
    }
    returnObj.reversed = revString;

    return returnObj;
    

}

//display a message to the string
function displayMessage(returnObj){
    
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}