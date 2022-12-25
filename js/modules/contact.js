const contact = async () => {
  const form = document.getElementById("contactForm");

  const contactFormSubmit = async (e) => {
    e.preventDefault();
    $("#contactModal").modal("show");
  };

  form.addEventListener("submit", contactFormSubmit);
};

export default contact;
