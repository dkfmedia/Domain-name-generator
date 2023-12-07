/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let containerselect = document.querySelector(".Domains");
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        let newChild = document.createElement("h3");
        newChild.innerText = pronoun[i] + adj[j] + noun[k] + ".com";
        containerselect.append(newChild);
      }
    }
  }
};
