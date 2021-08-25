//get value
function getValue() {
    let userStringWell = [];
    let userStringReversed = [];
    let userValue = document.getElementById("userString").value;
    userStringWell = palindromeWell(userValue);
    userStringReversed = palindromeReverse(userValue);
    displayPalindrome(userStringWell, userStringReversed);

}


//logic function
// char code START 97 to 122 + 224 to 239 + 242 to 246 + 248 to 255 END
function palindromeWell(userValue) {
    let userStringWell = [];
    let userValueB = userValue.toLowerCase().trim();
    for (let i = 0; i < userValueB.length; i++) {
        if (97 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 122 ||
            224 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 239 ||
            242 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 246 ||
            248 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 255) {
            userStringWell += (userValueB[i]);
        } // outside the if
    } // outside the for

    return userStringWell;
}

function palindromeReverse(userValue) {
    let userStringReversed = [];
    let userValueB = userValue.toLowerCase().trim();
    for (let i = userValueB.length - 1; i >= 0; i--) {
        if (97 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 122 ||
            224 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 239 ||
            242 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 246 ||
            248 <= userValueB.charCodeAt(i) && userValueB.charCodeAt(i) <= 255) {
            userStringReversed += (userValueB[i]);
        } // outside the if
    } // outside the for

    return userStringReversed;

}

function displayPalindrome(userStringWell, userStringReversed) {

    if (userStringWell == userStringReversed) {
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.add("alert-succes");
        document.getElementById("msg").innerHTML = `Votre phrase ${userStringReversed} est un palindrome`;
    } else {
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.remove("alert-succes");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("msg").innerHTML = `${userStringWell} n'est pas un palindrome`;

    }
}