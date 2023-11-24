
// const form = document.getElementById('seat');


// // Check if more than six seats are selected
// function selectSeat(){
// if (selectedSeats > 6) {
 
//     alert('You can only select a maximum of six seats at a time.');
//   }
// }



const radioButtons = document.querySelectorAll('input[type="radio"]');

for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', (event) => {
    const selectedSeats = document.querySelectorAll('input[type="radio"]:checked').length;
    if (selectedSeats < 2) {
      radioButton.disabled = true;
      alert('Please select at least 2 seats.');
    } else if (selectedSeats > 6) {
      radioButton.disabled = true;
      alert('Please select no more than 6 seats.');
    } else {
      radioButton.disabled = false;
      alert.hide();
    }
  });
}
