import dayjs from "dayjs";

let today = dayjs();

let h1 = document.createElement("h1");

h1.textContent = today.format("MM-DD-YYYY");

document.body.appendChild(h1);
