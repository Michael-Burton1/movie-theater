# _Movie Ticket_

#### _Get movie ticket price from user input_

#### By _**Jo Miller, Maxwell Meyer, Michael Burton**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_Select the movie that you want to see from the movies showing, the time that you want to see it, and your age group! The cost of the ticket will be returned to you when you submit the form._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to top level of the directory_
* _Open index.html in your browser_

## Known Bugs

* _UNDER CONSTRUCTION_
* _No value return to user_

## Specifications
```
Describe: TicketBooth()
Test: Store new object within TicketBooth Constructor.
Expect: (let ticketBooth = new TicketBooth();).toEqual(TicketBooth{tickets{}, currentId:})

Describe: Ticket()
Test: Store key-values within ticket constructor.
Expect: (let ticket = new Ticket();).toEqual(ticket{}))

Describe: TicketBooth.protoype.addTicket()
Test: Add Ticket object to TicketBooth object.
Excpect: (TicketBooth.prototype.addTicket(1).toEqual(1{age:, time:}))

Describe: TicketBooth.prototype.assignId()
Test: Assign id to ticket object when TicketBooth.prototype.addTicket() is called.
Expect: (TicketBooth.prototype.addticket(1).toEqual(1{id: 1, age:, time:}))

Describe: TicketBooth.prototype.findTicket() 
Test: Find a ticket by its id.
Expect: (TicketBooth.prototype.findTicket(1).toEqual(1{}));

Describe: TicketBooth.prototype.deleteTicket()
Test: Delete a ticket from TicketBooth.
Expect: (TicketBooth.prototype.deleteTicket(1).toDelete(1{}));
```

## License

[MIT](LICENSE.txt)

## Contact Information

_Jo Miller: joannamiller@gmail.com_ <br>
_Maxwell Meyer: maxreadswell@gmail.com_ <br>
_Michael Burton: micbur1@gmail.com_
