//get our user input
function getValue(){
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
    let revString [];
    //i need a decrementing for loop a loop that starts from the end.

    for (let index = userSting.length - 1; index >=0; index--) {
        revString += userSting[index];
    }

    

}

//display a message to the string
function displayMessage(){

}