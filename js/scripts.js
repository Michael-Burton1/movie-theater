// Business Logic for TicketBooth ---------
function TicketBooth(){
  this.tickets = {};
  this.currentId = 0;
}
TicketBooth.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}
TicketBooth.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TicketBooth.prototype.findTicket = function(id) {
  if (this.tickets[id] != undefined) {
    return this.tickets[id];
  }
  return false;
}

TicketBooth.prototype.deleteTicket = function(id) {
  if (this.tickets[id] === undefined) {
    return false; 
  }
  delete this.tickets[id];
  return true;
}

// Buisiness logic for Ticket
function Ticket(title, age, time, price){
  this.title = title;
  this.age = age; 
  this.time = time;
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