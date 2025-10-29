import { createElements } from "./scripts/createElements.js";
import { fetchApi } from "./scripts/fetchApi.js";

window.addEventListener("load", async () => {
  const displayReservations = document.getElementById("display-reservations");
  const reservationNameId = document.getElementById("reservation-name-id");
  const searchBtn = document.getElementById("search-btn");
  const reservations = await fetchApi();

  createElements(displayReservations, reservations);
  const btnsDelete = document.querySelectorAll(".btn-delete");
  const btnsEditar = document.querySelectorAll(".btn-editar");

  btnsDelete.forEach((btn, i) => {
    btn.addEventListener("click", async () => {
      const endpoint = `https://68fe13a67c700772bb12b92b.mockapi.io/api/reservations/${reservations[i].id}`;
      await fetch(endpoint, {
        method: "DELETE",
      });
      window.location.reload();
    });
  });

  btnsEditar.forEach((btn, i) => {
    btn.addEventListener("click", async () => {
      const reservationId = reservations[i].id;
      window.location.href = `./pages/register.html?id=${reservationId}`;
    });
  });

  searchBtn.addEventListener("click", () => {
    const searchValue = reservationNameId.value.toLowerCase();

    const result = reservations.filter((data) => {
      return data.guestName.toLowerCase().includes(searchValue);
    });

    console.log(result);
  });
});
