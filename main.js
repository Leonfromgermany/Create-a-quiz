// Leon's fencing quiz

// Answer Button
document.getElementById("mark").addEventListener("click", markBtnClicked);

// Variables
function markBtnClicked() {
  let qn1 = "yes";
  let qn2 = "3";
  let qn3a = "foil";
  let qn3b = "sabre";
  let qn4 = "false";
  let question = document.getElementById("question").value.toLowerCase();
  let question2 = document.getElementById("question2").value;
  let question3 = document.getElementById("question3").value.toLowerCase();
  let question4 = document.getElementById("question4").value.toLowerCase();
  let totalcorrect = 0;
  let totalquestions = 4;

  // Initial Output
  if (question === qn1) {
    document.getElementById("quest").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("quest").innerHTML = "False";
  }
  if (question2 == qn2) {
    document.getElementById("quest2").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("quest2").innerHTML = "False";
  }
  if (question3 === qn3a || question3 === qn3b) {
    document.getElementById("quest3").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("quest3").innerHTML = "False";
  }
  if (question4 === qn4) {
    document.getElementById("quest4").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("quest4").innerHTML = "False";
  }

  // Output of how well you did

  document.getElementById("score").innerHTML = totalcorrect;

  let percent1 = (totalcorrect / totalquestions) * 100;
  document.getElementById("percent").innerHTML = percent1;

  if (totalcorrect === 4) {
    document.getElementById("msg").innerHTML = "Wonderful";
  } else if (totalcorrect === 3) {
    document.getElementById("msg").innerHTML = "Pretty Good";
  } else if (totalcorrect === 2) {
    document.getElementById("msg").innerHTML = "Better Luck Next Time";
  } else if (totalcorrect === 1) {
    document.getElementById("msg").innerHTML = "Maybe Try Again";
  } else if (totalcorrect === 0) {
    document.getElementById("msg").innerHTML = "Study A Little More";
  }
}
