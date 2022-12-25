"use strict";

import nav from "./modules/nav.js";
import reservation from "./modules/reservation.js";

const documentReady = () => {
  nav();
  reservation();
};

document.addEventListener("DOMContentLoaded", documentReady);
