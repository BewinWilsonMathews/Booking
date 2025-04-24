function updatePrice() {
  const event = document.getElementById("event").value;
  let price = 0;

  // Event price based on type
  switch (event) {
    case "wedding":
      price = 1000;  // €1000 for wedding
      break;
    case "corporate":
      price = 800;  // €800 for corporate
      break;
    case "birthday":
      price = 500;  // €500 for birthday
      break;
    case "concert":
      price = 1200;  // €1200 for concert
      break;
    default:
      price = 0;
  }

  // Display the price in the format €xx.xx
  document.getElementById("eventPrice").textContent = `€${price.toFixed(2)}`;
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get selected values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const event = document.getElementById("event").value;
  const date = document.getElementById("date").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  const priceText = document.getElementById("eventPrice").textContent;

  // Simple confirmation with the event and price
  alert(`Thank you ${name}! You have booked a ${event} event on ${date} from ${startTime} to ${endTime}. Total: ${priceText}`);
});
