export function createElements(displayReservations, reservations) {
  displayReservations.innerHTML = "";

  reservations.forEach((el, i) => {
    displayReservations.innerHTML += `
    <div class="display">
            <div class="display-elements">
               <ul>
                <li><p>Name Resevation: ${el.guestName}</p></li>
                 <li><p>Guests: ${el.guestCount}</p></li>
                 <li><p>Room Number: ${el.roomNumber}</p></li>
                 <li><p>Room Type: ${el.roomType}</p></li>
                 <li><p>Nights: ${el.nightsCount}</p></li>
                 <li><p>Check-in: ${el.checkInDate}</p></li>
                 <li><p>Check-out: ${el.checkOutDate}</p></li>
                 <li><p>Total $: ${el.totalPrice}</p></li>
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
