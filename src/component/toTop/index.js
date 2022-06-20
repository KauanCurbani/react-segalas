import React from "react";
import "./style.css";
import { IoIosArrowRoundUp } from "react-icons/io";

function ToTop() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const goToTopButton = document.querySelector(".toTopButton");

  window.addEventListener("scroll", function () {
    if (
      window.scrollY > window.screen.height / 2 
    ) {
      goToTopButton.style.opacity = "1";
    } else {
      goToTopButton.style.opacity = "0";
    }
  });

  return (
    <div className="toTopButton toTop" onClick={scrollToTop}>
      <IoIosArrowRoundUp className="icon" />
    </div>
  );
}

export default ToTop;
