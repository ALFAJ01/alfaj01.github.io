var i = 0;
var txt1 =
  "Hi My Self ..! << Now I want to say something special to you. <<< So , Please read everything carefully...! > When I saw you for the first time  < You seemed something Special to me. << As the days go < you get closer to me from my side ....! << I don't know the reason why your thoughts always resonate inside my mind...! > Everything about you is always interesting for me But Honestly Something You need to Change too...! << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in the future...! > I Love my Parents so much than anything else in this world....! << Now You are the only person whom I love equally with my parents....! >I💔 <! << By @محمد أفسارول الحق > |          . ";
var speed = 55;

typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "");
      askForAcceptance()
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function askForAcceptance() {
  var userResponse = prompt("Do you accept my proposal? (Yes/No)");

  if (userResponse && userResponse.toLowerCase() === "yes") {
    alert("Thank you for accepting! Your response has been noted.");
    openGoogleForm();
  } else {
    alert("Oh no! If you change your mind, let me know. Your response has been noted.");
  }
}

function openGoogleForm() {
  var googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfMsBgcH5r67Mg5hcTL4qsEy-nTW0fBpoQQBMkbnDIPdpc-VQ/viewform?usp=sf_link"; // Replace with your Google Form link
  window.open(googleFormLink, "_blank");
}
