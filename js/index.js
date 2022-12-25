"use strict";

import nav from "./modules/nav.js";
import reservation from "./modules/reservation.js";
import contact from "./modules/contact.js";

const documentReady = () => {
  nav();
  reservation();
  contact();
};

document.addEventListener("DOMContentLoaded", documentReady);
