import $ from "jquery";
import "/app3.css";

// 初始化html
let html = `
<section id="app3">
  <div class="square"></div>
</section>
`;
$(html).appendTo($("body>.page"));

let $square = $("#app3 .square");
let localKey = "app3.active";
let localActive = localStorage.getItem(localKey);

$square.on("click", () => {
  if ($square.hasClass("active")) {
    $square.removeClass("active");
    localStorage.setItem(localKey, "no");
  } else {
    $square.addClass("active");
    localStorage.setItem(localKey, "yes");
  }
});

// 读取缓存数据
$square.toggleClass("active", localActive === "yes");
