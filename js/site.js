//get value
function getValue() {
    let pal = [];
    let userValue = document.getElementById("userString").value;

    pal = palindrome(userValue);

    alert(userValue);
}


//logic function
// char code START 97 to 122 + 224 to 239 + 242 to 246 + 248 to 255 END
function palindrome(userValue) {
    let userValue2 = userValue.toLowerCase().trim().split("");


    alert(userValue2 + " ok")


}