
window.onload = function() {
  document.querySelector("#sendData").onclick = function() {
    
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
    ajaxSend();
    alert ("Данные успешно отправлены");
  }
}

function ajaxSend() { 

  var a = document.getElementById("name").value;
  var b = document.getElementById("job").value;
        
  var xhr = new XMLHttpRequest();
        
  xhr.open("POST", "https://reqres.in/api/users", true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send("name=" + encodeURIComponent(a) + "&job=" + encodeURIComponent(b)); 

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 201) { 
        document.querySelector("#result").innerHTML = xhr.responseText;
      }
    } 
  }






