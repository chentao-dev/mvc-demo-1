import "/app4.css";
import $ from "jquery";

let $circle = $("#app4 .circle");
$circle.on("mouseover", () => {
  $circle.addClass("active");
});
$circle.on("mouseout", () => {
  $circle.removeClass("active");
});
