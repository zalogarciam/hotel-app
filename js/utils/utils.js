export const fetchReservations = async () => {
  try {
    const { data } = await axios.get(
      "https://zalogarciam.github.io/hotel-app/api/data.json"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const renderReservations = (data) => {
  $("#reservationTable").find("tbody").html("");

  data.forEach((element) => {
    const { id, name, phone, room, startDate, endDate } = element;
    $("#reservationTable")
      .find("tbody")
      .append(
        `<tr><td> ${name}</td><td>${phone}</td><td>${room}</td><td>${startDate}</td><td>${endDate}</td></tr>`
      );
  });

  for (var i = 0; i < localStorage.length; i++) {
    var item = localStorage.getItem(localStorage.key(i));
    var json = JSON.parse(item);
    $("#reservationTable")
      .find("tbody")
      .append(
        `<tr><td> ${json["name"]}</td><td>${json["phone"]}</td><td>${json["room"]}</td><td>${json["startDate"]}</td><td>${json["endDate"]}</td></tr>`
      );
  }
};
