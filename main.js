function validate(){

   var x = document.getElementById("name").value;
   var y = document.getElementById("job").value;

   if (x.length==0){
      alert("Введите свое имя");
      return false;
   }

   if (y.length==0){
      alert("Введите свой вид деятельности");
      return false;
   }

   // at=y.indexOf("@");
   // dot=y.indexOf(".");
 
   // if (at<1 || dot <1){
   //    alert("Email введен не верно");
   //    return false;
   // }

   function getXmlHttp() {
      var xmlhttp;
       try {
         xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
       } catch (e) {
       try {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       } catch (E) {
         xmlhttp = false;
       }
       }
       if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
         xmlhttp = new XMLHttpRequest();
       }
       return xmlhttp;
   }

   function summa() {
   var a = document.getElementById("name").value;
   var b = document.getElementById("job").value;
   var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
   xmlhttp.open('POST', 'https://reqres.in/api/users', true); // Открываем асинхронное соединение
   xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
   xmlhttp.send("a=" + encodeURIComponent(a) + "&b=" + encodeURIComponent(b)); // Отправляем POST-запрос
   xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          document.getElementById("summa").innerHTML = xmlhttp.responseText; // Выводим ответ сервера
        }
      }
    };
  }      
}