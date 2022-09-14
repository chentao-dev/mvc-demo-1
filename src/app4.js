import $ from "jquery";
import "/app4.css";

// 初始化html
let html = `
<section id="app4">
  <div class="circle"></div>
</section>
`;
$(html).appendTo($("body>.page"));

let $circle = $("#app4 .circle");
$circle.on("mouseover", () => {
  $circle.addClass("active");
});
$circle.on("mouseout", () => {
  $circle.removeClass("active");
});
