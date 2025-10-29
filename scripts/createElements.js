export function createElements(displayReservations, reservations) {
  displayReservations.innerHTML = "";

  reservations.forEach((el, i) => {
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
}
