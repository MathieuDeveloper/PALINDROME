// let regex = /[^a-z0-9]/gi;

function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let returnObj = palindrome(userString);
    displayPalindrome(returnObj);
}

function palindrome(userString) {
    userString = userString.toLowerCase();
    let reverseString = [];
    let regex = /[^a-z0-9àâçéèêëîï]/gi;
    let returnObj = {};
    userString = userString.replace(regex,"");
    
    for (let index = userString.length-1; index >=0; index--) {
        reverseString += userString[index];
        
    }
    returnObj.reverseString = reverseString;
    returnObj.userString = userString;

    if (userString == reverseString) {
        returnObj.msg = `Super, ${userString} est un palindrome !`;
    } else {
        returnObj.msg = `${userString} n'est pas un palindrome.`;
    }

    return returnObj;
}

function displayPalindrome(returnObj) {
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("msg").innerHTML = returnObj.msg;
}