function addPerson()
{
    var firstNameElement = $( "#name" )[0];
    //console.log("Adding a person: " + firstNameElement.value);
    viewController.addPerson(firstNameElement.value);

  //  var nameBox = document.getElementById("personNameBox");
//    nameBox.innerText = firstNameElement.value;
}

function clearStorage(){
  localStorage.clear();
  //viewController.updateView();
}

$( document ).ready(function() {
    if (localStorage.getItem("names") === null) {

    }else{
      viewController.updateView();
    }
});
