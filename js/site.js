//get value
function getValue() {
    alert("start");
    let userValue = document.getElementById("userString").value;
    alert(userValue.charCodeAt(0));
    palindrome(userValue);

    alert(userValue);
}


//logic function
// char code START 97 to 122 + 224 to 239 + 242 to 246 + 248 to 255 END
function palindrome(userValue) {
    let vNoStrange = [];
    
    let userValueB = userValue.toLowerCase().trim();
    alert(userValueB + " ok");
    for (let i = 0; i < userValueB.length; i++) {
        
        alert(userValueB + " ok2");
     let valueCharCode = userValueB.charCodeAt(0);
     alert(valueCharCode);
     
 }
   
               
    }