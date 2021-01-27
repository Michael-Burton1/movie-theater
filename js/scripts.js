// Business Logic for TicketBooth ---------
function TicketBooth(){
  this.tickets = {};
  this.currentId = 0;
}

TicketBooth.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


TicketBooth.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}

/*
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
} */


// Buisiness logic for Ticket
let ticketBooth = new TicketBooth();

function Ticket(title, age, time, price){
  this.title = title;
  this.age = age; 
  this.time = time;
  this.price = price;
}

Ticket.prototype.createPrice = function(){
  if (this.age === 1) {
    return this.price -= 4;
  } else if (this.age === 2) {
    return this.price -=2;
  }
}

/* Ticket.prototype.displayAge = function() {
  if (this.age === 1) {
    return this.age = "Youth (0-13)";
  } else if (this.age === 0) {
    return this.age = "Adult (14-59)";
  } else if (this.age === 2) {
    return this.age = "Senior (60+)";
  }
} */

// User Interface Logic ---------

$(document).ready(function() {
  $("form#ticket-builder").submit(function(event) {
    event.preventDefault();
  const inputtedMovie = $("#movie-title").val();
  const inputtedTime = parseInt($("#movie-time").val());
  const inputtedAge = parseInt($("#age").val());
  let newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime, inputtedTime);
  newTicket.createPrice();
  $("#movie").text(inputtedMovie);
  $("#price").text(newTicket.price);
  $("#show-ticket-price").show();
  ticketBooth.addTicket(newTicket);
  });
});
