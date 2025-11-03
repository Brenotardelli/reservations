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
    displayReservations.innerHTML = "";
    const result = reservations.filter((data) => {
      return data.guestName.toLowerCase().includes(searchValue);
    });

    result.forEach((el, i) => {
      displayReservations.innerHTML += `
    <div class="display">
            <div class="display-elements">
               <ul>
                <li>Name: <span>${el.guestName}</span></li>
                 <li>Guests: <span>${el.guestCount}</span></li>
                 <li>Room #: <span>${el.roomNumber}</span></li>
                 <li>Type: <span>${el.roomType}</span></li>
                 <li>Nights: <span>${el.nightsCount}</span></li>
                 <li>Check-in: <span>${el.checkInDate}</span></li>
                 <li>Check-out: <span>${el.checkOutDate}</span></li>
                 <li>Total $: <span>${el.totalPrice}</span></li>
               </ul>
             </div>
               <div class="buttons">
                <a href="./pages/edit.html?id=${el.id}" class="btn-editar">edit</a>
                <button class="btn-delete">delete</button>
              </div>
    </div>
`;
    });
  });
});
