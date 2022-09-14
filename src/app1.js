import $ from "jquery";
import "/app1.css";

// 初始化html
let html = `
<section id="app1">
    <div class="output">
        <span id="number">100</span>
    </div>
    <div class="actions">
        <button>+1</button>
        <button>-1</button>
        <button>×2</button>
        <button>÷2</button>
    </div>
</section>
`;
$(html).appendTo($("body>.page"));

let $number = $("#number");
let $button = $(".actions>button");
let localKey = "app1.number";
let localNum = localStorage.getItem(localKey);

$button.eq(0).on("click", () => {
  let n = +$number.text() + 1;
  $number.text(n);
  localStorage.setItem(localKey, n);
});
$button.eq(1).on("click", () => {
  let n = +$number.text() - 1;
  $number.text(n);
  localStorage.setItem(localKey, n);
});
$button.eq(2).on("click", () => {
  let n = +$number.text() * 2;
  $number.text(n);
  localStorage.setItem(localKey, n);
});
$button.eq(3).on("click", () => {
  let n = +$number.text() / 2;
  $number.text(n);
  localStorage.setItem(localKey, n);
});

// 读取缓存数据
$number.text(localNum || 100); //100兜底
