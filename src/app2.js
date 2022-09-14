import $ from "jquery";
import "/app2.css";

// 初始化html
let html = `
<section id="app2">
    <ol class="tab-bar">
        <li>111</li>
        <li>222</li>
    </ol>
    <ol class="tab-content">
        <li>内容1</li>
        <li>内容2</li>
    </ol>
</section>
`;
$(html).appendTo($("body>.page"));

let $tabBar = $("#app2 .tab-bar");
let $tabContent = $("#app2 .tab-content");
let localKey = "app2.index";
let localIndex = localStorage.getItem(localKey) || 0;

$tabBar.on("click", "li", (e) => {
  let $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  $tabContent
    .children()
    .eq($li.index())
    .addClass("active")
    .siblings()
    .removeClass("active");
  localStorage.setItem(localKey, $li.index());
});

// 读取缓存数据
$tabBar.children().eq(localIndex).trigger("click");
