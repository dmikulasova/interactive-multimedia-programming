function addPerson(){
  var name = document.getElementById("name").value;
  //alert(name);
  var list= document.getElementById("personList");
  list.innerHTML += "<p>"+ name +"</p>";

}
