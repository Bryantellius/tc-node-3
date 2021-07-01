import dayjs from "dayjs";
import { DOMCreate, DOMStyle } from "./dom.utils";
import math from "./math.utils";

let subtotal = 19.99;
let tax = 0.15;

let today = dayjs();

let h1 = DOMCreate("h1", "container", today.format("MM-DD-YYYY"));
let p = DOMCreate(
  "p",
  "container",
  `Subtotal: ${subtotal} with tax: ${tax * 100}%`
);
let total = DOMCreate("p", "container", `Total: $${math.salesTax(subtotal, tax)}`);

DOMStyle(h1, "font-size: 100px");
DOMStyle(p, "text-decoration: underline");
DOMStyle(total, "color: green");
