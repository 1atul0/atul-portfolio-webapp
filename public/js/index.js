//for nav bar element change color stable







//  for animated text in home page
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Full Stack Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Competitive coder ";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Quick Learner";
  }, 8000); //1s = 1000 milliseconds
};


textLoad();
setInterval(textLoad, 12000);

// document.querySelector("body").style.color = "blue";
$("#skill-development").css("background", "#83fae2");
// if competitive programming button clicked in skill page then work
$("#skill-cp").click(function () {
  $(".skill-development-content").addClass("skill-invisible");
  $(".skill-coursework-content").addClass("skill-invisible");
  $(".skill-cp-content").removeClass("skill-invisible");
  $(this).css("background", "#83fae2");
  $("#skill-development").css("background", "#D3D3D3");
  $("#skill-coursework").css("background", "#D3D3D3");
});

// if development button clicked in skill page then work
$("#skill-development").click(function () {
  $(".skill-cp-content").addClass("skill-invisible");
  $(".skill-coursework-content").addClass("skill-invisible");
  $(".skill-development-content").removeClass("skill-invisible");
  $(this).css("background", "#83fae2");
  $("#skill-cp").css("background", "#D3D3D3");
  $("#skill-coursework").css("background", "#D3D3D3");
});

// if coursework button clicked in skill page then work
$("#skill-coursework").click(function () {
  $(".skill-cp-content").addClass("skill-invisible");
  $(".skill-development-content").addClass("skill-invisible");
  $(".skill-coursework-content").removeClass("skill-invisible");
  $(this).css("background", "#83fae2");
  $("#skill-development").css("background", "#D3D3D3");
  $("#skill-cp").css("background", "#D3D3D3");
});


//for alert after submission  not working
// function submitForm() {
//   // Get the form element
//   var form = document.getElementById("myForm");

//   // Submit the form
//   // form.submit();

//   // Display an alert message
//   alert("Form submitted successfully!");

//   // Redirect to the home page
//   // window.location.href = "home.html";
// }
