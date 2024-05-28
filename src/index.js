import "./styles.css";
import portrait1_img from "./images/cottonbro.jpg";
import portrait2_img from "./images/cottonbro2.jpg";

import icon_email from "./images/email-outline.svg";
import icon_github from "./images/github-original.svg";
import icon_linkedin from "./images/linkedin-original.svg";
import icon_phone from "./images/phone.svg";
import icon_twitter from "./images/twitter-original.svg";

document.addEventListener("DOMContentLoaded", () => {
  let portrait1_area = document.querySelector(".portrait");
  portrait1_area.style.backgroundImage = `url(${portrait1_img})`;

  let portrait2_area = document.querySelector(".bottom_image");
  let portrait2_element = document.createElement("img");
  portrait2_element.src = portrait2_img;
  portrait2_area.appendChild(portrait2_element);

  let header_icons_div = document.querySelector(".icons");
  let github_img = document.createElement("img");
  github_img.src = icon_github;
  header_icons_div.appendChild(github_img);
  let linkedin_img = document.createElement("img");
  linkedin_img.src = icon_linkedin;
  header_icons_div.appendChild(linkedin_img);
  let twitter_img = document.createElement("img");
  twitter_img.src = icon_twitter;
  header_icons_div.appendChild(twitter_img);

  let icon_divs_in_all_boxes = document.querySelectorAll(".box_icons");
  for (let i = 0; i < icon_divs_in_all_boxes.length; i++) {
    let github_img2 = document.createElement("img");
    github_img2.src = icon_github;
    icon_divs_in_all_boxes[i].appendChild(github_img2);
  }
});
