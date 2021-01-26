// Business Logic for Theater ---------
function Theatre(){
  this.movies = {};
  this.currentId = 0;
}
Theatre.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
}
Theatre.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Theatre.prototype.findMovie = function(id) {
  if (this.movies[id] != undefined) {
    return this.movies[id];
  }
  return false;
}

Theatre.prototype.deleteMovie = function(id) {
  if (this.movies[id] === undefined) {
    return false; 
  }
  delete this.movies[id];
  return true;
}

// Buisiness logic for movie
function Movie(title, time, rating, price){
  this.title = title; 
  this.time = time;
  this.rating = rating;
  this.price = price;
}







// Business Logic for Contacts ---------

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic ---------
let addressBook = new AddressBook();

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});