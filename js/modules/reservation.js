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

    const data = await fetchReservations();
    console.log(data);

    const name = form.name.value;
    const phone = form.phone.value;
    const room = form.room.value;
    const startDate = form.startDate.value;
    const endData = form.endDate.value;
    $("#exampleModal").modal("show");
    console.log("Reservation");
  };

  form.addEventListener("submit", makeReservation);
};

export default reservation;
