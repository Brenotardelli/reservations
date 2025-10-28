export const fetchApi = async () => {
  const endpoint =
    "https://68fe13a67c700772bb12b92b.mockapi.io/api/reservations";
  const req = await fetch(endpoint);
  const res = await req.json();
  return res;
};
