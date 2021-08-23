//get value
function getValue() {
    let userValue = document.getElementById("userString").value;
let uvt= userValue.trim();
let uvts = uvt.split("");
alert(uvts);
}

getValue();