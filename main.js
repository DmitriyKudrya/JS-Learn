function validate() {

  var x = document.getElementById("name").value;
  var y = document.getElementById("job").value;

  if (x.length==0) {
    alert("Введите свое имя");
    return false;
  }

  if (y.length==0) {
    alert("Введите свой вид деятельности");
    return false;
  }
}
   // at=y.indexOf("@");
   // dot=y.indexOf(".");
 
   // if (at<1 || dot <1){
   //    alert("Email введен не верно");
   //    return false;
   // }

var a = document.getElementById("name").value;
var b = document.getElementById("job").value;
    
var xhr = new XMLHttpRequest();
    
xhr.open("POST", "https://reqres.in/api/users", true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send("name=" + encodeURIComponent(a) + "&job=" + encodeURIComponent(b)); 

xhr.onreadystatechange = function() {
  if(xhr.readyState == 4) {
    if(xmlhttp.status == 201) {
      response ();
    }
  } 
}

function response () {
  
}




