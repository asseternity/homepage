import "./styles.css";
import portrait1_img from "./images/cottonbro.jpg";
import portrait2_img from "./images/cottonbro2.jpg";

let portrait1_area = document.querySelector(".portrait");
let portrait1_element = document.createElement("img");
portrait1_element.src = portrait1_img;
portrait1_area.appendChild(portrait1_element);

let portrait2_area = document.querySelector(".bottom_portrait");
let portrait2_element = document.createElement("img");
portrait2_element.src = portrait2_img;
portrait2_area.appendChild(portrait2_element);
