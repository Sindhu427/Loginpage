function check() {
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    var c = document.getElementById("Email").value;
    var d = document.getElementById("Pass").value;
    var e = document.getElementById("Gender").value;
    
    if(a=="Sindhu" && b=="S" && c=="sindhusubramani274@gmail.com" && d=="Sindhu274" && e=="Female"){
            window.location.assign("index2.html");
            }
    
    else{
            alert("incorrect");
        }      
    }