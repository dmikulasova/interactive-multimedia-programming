var viewController = new ViewController();

function ViewController()
{
  this.personModel = new PersonModel();

  this.updateView = function()
  {
    var results = document.getElementById("results");

    results.innerHTML = "";
    for (var i = 0; i < this.personModel.getPersons().length; i++)
    {
      var onePerson = this.personModel.getPersons()[i];
      results.innerHTML += onePerson.name+"<br>";
    }
  }
  this.addPerson = function(name)
  {
    var newPerson = new Person(name);
    this.personModel.addPerson(newPerson);
    this.updateView();
  }
}
