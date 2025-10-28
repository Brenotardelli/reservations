window.addEventListener("load", async () => {
  const formEdit = document.getElementById("editForm");
  const guestCount = document.getElementById("guest-count");
  const roomNumber = document.getElementById("room-number");
  const roomType = document.getElementById("room-type");
  const checkIn = document.getElementById("checkIn");
  const checkOut = document.getElementById("checkOut");
  const nightsCount = document.getElementById("nightsCount");
  const totalPrice = document.getElementById("total-price");
  const guestName = document.getElementById("guest-name");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const url = `https://68fe13a67c700772bb12b92b.mockapi.io/api/reservations/${id}`;
  const req = await fetch(url);
  const res = await req.json();

  const data = {
    guestName: res.guestName,
    guestCount: res.guestCount,
    roomNumber: res.roomNumber,
    roomType: res.roomType,
    nightsCount: res.nightsCount,
    checkInDate: res.checkInDate,
    checkOutDate: res.checkOutDate,
    totalPrice: res.totalPrice,
  };

  guestName.value = res.guestName;
  guestCount.value = res.guestCount;
  roomNumber.value = res.roomNumber;
  roomType.value = res.roomType;
  checkIn.value = res.checkInDate;
  checkOut.value = res.checkOutDate;
  nightsCount.value = res.nightsCount;
  totalPrice.value = res.totalPrice;

  formEdit.addEventListener("change", ({ target }) => {
    const { name, value } = target;
    data[name] = value;
  });

  formEdit.addEventListener("submit", async (event) => {
    event.preventDefault();

    const endpoint = `https://68fe13a67c700772bb12b92b.mockapi.io/api/reservations/${id}`;

    const req = await fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    window.location.href = "../../index.html";
  });
});
