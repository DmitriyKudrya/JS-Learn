
window.onload = function() {

  var n3 = localStorage.getItem("n2");
  var j3 = localStorage.getItem("j2");
  var id3 = localStorage.getItem("id2");
  var cr3 = localStorage.getItem("cr2");

  document.getElementById("n1").innerHTML = n3;
  document.getElementById("j1").innerHTML = j3;
  document.getElementById("id1").innerHTML = id3;
  document.getElementById("cr1").innerHTML = cr3;

  localStorage.clear();

}