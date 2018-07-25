
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

    document.getElementById("myForm").reset();
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
        
      var resJson = JSON.parse(xhr.responseText);

      var n1 = resJson.name;
      var j1 = resJson.job;
      var id1 = resJson.id;
      var cr1 = resJson.createdAt;

      localStorage.setItem("n2", n1);
      localStorage.setItem("j2", j1);
      localStorage.setItem("id2", id1);
      localStorage.setItem("cr2", cr1);

      window.location = "Table.html";
    }
  } 
}

