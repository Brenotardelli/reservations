import { clearInputs } from "./clearInputs.js";
import { createElements } from "./createElements.js";

window.addEventListener("load", () => {
  const reservationForm = document.getElementById("reservationForm");

  const data = {
    guestName: "",
    guestCount: "",
    roomNumber: "",
    roomType: "",
    nightsCount: "",
    checkInDate: "",
    checkOutDate: "",
    totalPrice: "",
  };

  reservationForm.addEventListener("change", ({ target }) => {
    const { name, value } = target;
    data[name] = value;
  });

  reservationForm.addEventListener("submit", async (event) => {
    const { target } = event;
    event.preventDefault();

    const endpoint =
      "https://68fe13a67c700772bb12b92b.mockapi.io/api/reservations";

    const req = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    clearInputs(reservationForm);
    window.location.reload();
  });
});
