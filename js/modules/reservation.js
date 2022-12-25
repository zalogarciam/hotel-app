import { fetchReservations, renderReservations } from "../utils/utils.js";

const reservation = async () => {
  const reservationButton = document.getElementById("reservationId");
  const form = document.getElementById("reservationForm");

  reservationButton.addEventListener("click", async () => {
    const data = await fetchReservations();
    renderReservations(data);
    $("#reservationModal").modal("show");
  });

  const makeReservation = async (e) => {
    e.preventDefault();

    console.log(form);
    const name = form.name.value;
    const phone = form.phone.value;
    const room = form.room.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;

    console.log(room);
    localStorage.setItem(
      name + phone,
      JSON.stringify({ name, phone, room, startDate, endDate })
    );

    const data = await fetchReservations();
    renderReservations(data);

    $("#exampleModal").modal("show");
  };

  form.addEventListener("submit", makeReservation);
};

export default reservation;
