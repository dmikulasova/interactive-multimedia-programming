
function doStuff(){
  $.ajax({
    dataType: "jsonp",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
  });
}

function jsonCallback(json)
{
  console.log(json[0]);
  var list=$("#personList")[0];

  for (var i = 0; i < json.length; i++) {
    list.innerHTML += json[i]["name"]+": "+json[i]["email"]+"<br>";
  }
}
