import "/app1.css";
import $ from "jquery";

let $number = $("#number");
let $button = $(".actions>button");
$number.text(localStorage.getItem("n") || 100); //100兜底
$button.eq(0).on("click", () => {
  let n = +$number.text() + 1;
  $number.text(n);
  localStorage.setItem("n", n);
});
$button.eq(1).on("click", () => {
  let n = +$number.text() - 1;
  $number.text(n);
  localStorage.setItem("n", n);
});
$button.eq(2).on("click", () => {
  let n = +$number.text() * 2;
  $number.text(n);
  localStorage.setItem("n", n);
});
$button.eq(3).on("click", () => {
  let n = +$number.text() / 2;
  $number.text(n);
  localStorage.setItem("n", n);
});
