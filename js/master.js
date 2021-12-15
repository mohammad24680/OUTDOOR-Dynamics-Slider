var i = 0;
var move = setInterval(_right, 7000);
var txt = $(".slide > ul > li").children("img").attr("data-txt");
var num = $(".slide > ul > li").attr("data-num");
$(".menu").click(function () {
  $(".head22").css({
    transform: "translateY(0)",
    transition: "1s",
  });
  $(".menu").css("display", "none");
  $(".menu2").css("display", "flex");
});
$(".menu2").click(function () {
  $(".head22").css({
    transform: "translateY(-140%)",
    transition: "1s",
  });
  $(".menu").css("display", "flex");
  $(".menu2").css("display", "none");
});

$(".slide>ul>li").click(function () {
  txt = $(this).children("img").attr("data-txt");
  num = $(this).attr("data-num");

  $("#show").attr("src", $(this).children("img").attr("src"));
  $(this).css("background", "#d79a2b");
  $(this).nextAll().css("background", "rgba(255, 255, 255, .4)");
  $(this).prevAll().css("background", "rgba(255, 255, 255, .4)");
  // for img
});

$(".slide>ul>li").click(function () {
  i = $(this).index();
  console.log(i);
});

function _right() {
  if (i < $(".slide>ul>li").length - 1) {
    $("#show").attr(
      "src",
      $(".slide>ul>li:eq(" + i + ")")
        .next()
        .children("img")
        .attr("src")
    );
    $(".slide>ul>li:eq(" + i + ")")
      .next()
      .prevAll()
      .css("background", "rgba(255, 255, 255, .4)");
    $(".slide>ul>li:eq(" + i + ")")
      .next()
      .css("background", "#d79a2b");

    i++;
  } else {
    i = 0;
    $("#show").attr(
      "src",
      $(".slide>ul>li:eq(" + i + ")")
        .children("img")
        .attr("src")
    );
    $(".slide>ul>li:eq(" + i + ")")
      .nextAll()
      .css("background", "rgba(255, 255, 255, .4)");
    $(".slide>ul>li:eq(" + i + ")").css("background", "#d79a2b");
  }
}

function _left() {
  if (i != 0) {
    $("#show").attr(
      "src",
      $(".slide>ul>li:eq(" + i + ")")
        .prev()
        .children("img")
        .attr("src")
    );
    $(".slide>ul>li:eq(" + i + ")")
      .prev()
      .nextAll()
      .css("background", "rgba(255, 255, 255, .4)");
    $(".slide>ul>li:eq(" + i + ")")
      .prev()
      .css("background", "#d79a2b");
    i--;
  } else {
    i = $(".slide>ul>li").length - 1;
    $("#show").attr(
      "src",
      $(".slide>ul>li:eq(" + i + ")")
        .children("img")
        .attr("src")
    );
    $(".slide>ul>li:eq(" + i + ")")
      .prevAll()
      .css("background", "rgba(255, 255, 255, .4)");
    $(".slide>ul>li:eq(" + i + ")").css("background", "#d79a2b");
  }
}
