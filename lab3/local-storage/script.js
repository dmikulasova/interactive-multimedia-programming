function addPerson()
{
    var firstNameElement = document.getElementById("name");
    //console.log("Adding a person: " + firstNameElement.value);
    viewController.addPerson(firstNameElement.value);

  //  var nameBox = document.getElementById("personNameBox");
//    nameBox.innerText = firstNameElement.value;
}

function clearStorage(){
  localStorage.clear();
  //viewController.updateView();
}

function init(){
  if (localStorage.getItem("names") === null) {

    }else{
      viewController.updateView();
    }
}
