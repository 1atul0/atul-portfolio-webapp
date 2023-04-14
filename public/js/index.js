//  for animated text in home page
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Full Stack Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Competitive Progammer ";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Quick Learner";
  }, 8000); //1s = 1000 milliseconds
};


textLoad();
setInterval(textLoad, 12000);

// document.querySelector("body").style.color = "blue";
$("#skill-development").css("background", "red");
// if competitive programming button clicked in skill page then work
$("#skill-cp").click(function () {
  $(".skill-development-content").addClass("skill-invisible");
  $(".skill-coursework-content").addClass("skill-invisible");
  $(".skill-cp-content").removeClass("skill-invisible");
  $(this).css("background", "red");
  $("#skill-development").css("background", "#83fae2");
  $("#skill-coursework").css("background", "#83fae2");
});

// if development button clicked in skill page then work
$("#skill-development").click(function () {
  $(".skill-cp-content").addClass("skill-invisible");
  $(".skill-coursework-content").addClass("skill-invisible");
  $(".skill-development-content").removeClass("skill-invisible");
  $(this).css("background", "red");
  $("#skill-cp").css("background", "#83fae2");
  $("#skill-coursework").css("background", "#83fae2");
});

// if coursework button clicked in skill page then work
$("#skill-coursework").click(function () {
  $(".skill-cp-content").addClass("skill-invisible");
  $(".skill-development-content").addClass("skill-invisible");
  $(".skill-coursework-content").removeClass("skill-invisible");
  $(this).css("background", "red");
  $("#skill-development").css("background", "#83fae2");
  $("#skill-cp").css("background", "#83fae2");
});
