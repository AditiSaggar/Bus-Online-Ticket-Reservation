let selectedSeats = [];
let bookedSeats = [];

function selectSeat(seat) {
  const errorMessageElement= document.getElementById("error-message");

  if (bookedSeats.includes(seat)) {
    displayErrorMessage("Seat already booked. Please select another seat.");
    
  if (selectedSeats.length < 5 && !selectedSeats.includes(seat)) {
    selectedSeats.push(seat);
    document.getElementById(seat).classList.add("selected");
      clearErrorMessage(); 
  } else if (selectedSeats.includes(seat)) {
    selectedSeats.splice(selectedSeats.indexOf(seat), 1);
    document.getElementById(seat).classList.remove("selected");
clearErrorMessage();
  } else {
    displayErrorMessage("You can select up to 5 seats only");
  }
}

function bookSeats(event) {
  event.preventDefault(); // Prevent form submission
  
  if (selectedSeats.length < 2) {
    displayErrorMessage("Please select at least 2 seats");
    return false; 
  } else if (selectedSeats.length > 5) {
    displayErrorMessage("You can select up to 5 seats only");
    return false; 
  } else {
    window.location.href = "../../invoicing.html";
  }
}

function displayErrorMessage(message) {
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = message;
}
function clearErrorMessage() {
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = "";
}
}




// let selectedSeats = [];


// function selectSeat(seat) {
//   if (selectedSeats.length < 5 && !selectedSeats.includes(seat)) {
//     selectedSeats.push(seat);
//     document.getElementById(seat).classList.add("selected");
//   } else if(selectedSeats.includes(seat)) {
//     selectedSeats.splice(selectedSeats.indexOf(seat), 1);
//     document.getElementById(seat).classList.remove("selected");
//   }
// }

// function bookSeats() {
//   if (selectedSeats.length < 2) {

//     alert("Please select at least 2 seats");
//     return false;

//   } else if (selectedSeats.length > 5) {
//     alert("You can select up to 5 seats only");

//   } else {
//     // book the selected seats
//     window.location.href="../invoicing.html";
//   }
// }
