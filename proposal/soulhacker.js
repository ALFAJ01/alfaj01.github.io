var i = 0;
var txt1 =
   "Assalamualaikum 🙂 ..! << Now I want to say something special to you. <<< So, Please read everything carefully...! > When I saw you for the first time infronts of zoology department while you walking with your friends. <<< You seemed something Special to me. And my heart wanted to talk to you > But I can't make a courage to talk you And when I try to make a courage  to talk you than my inner soul talk to me Brothes you are in fasting and wnated to do this later on i make courage but at that point you are Vanish think are stoped here. > If I say that infornt of zoology departmentis is not the 1st i met than  it  will't go wrong i saw you several time but i can't figure out who are really you are << But that day I finnaly  figured out who are you. << Later on I try to stop everything here but i can't that why i write this 🙃 <when I looked at you a moment of your glances from this moment to till now << I don't know the reason why your thoughts always resonate inside my mind...! > Everything about you is always interesting for me. << I am somewhat nervous Because I haven't said these words to anyone and I won't say it anyone in future if you wish so. But the Honest things is what you know I say these words before you but Everyone response me go ahead achived your goal you will get something better but believe  me i never in a relationship till now with anyone . >And I Don't know why my Hert say to me that the better one is You👆🏻 .> I Love my Parents and my family so much than anything else in this 🌎. But  << Now my Hert the only person whom I love equally with my parents....! > <<Afsarul> |   . ";
var speed = 100; // Adjusted speed for slower reading

typeWriter();

function
 
typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<") document.getElementById("text1").innerHTML += "</br>";
    else
 
if (txt1.charAt(i) == ">") document.getElementById("text1").innerHTML = "";
    else
 
if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "");
      askForAcceptance();
    } else {
      document.getElementById("text1").innerHTML += txt1.charAt(i);

      // Added pauses for emphasis
      if (txt1.charAt(i) === "!") {
        setTimeout(function() {}, 1000); // Pause for 1 second after exclamation marks
      }
      if (txt1.charAt(i) === ">" && txt1.charAt(i + 1) === "<") {
        setTimeout(function() {}, 1500); // Pause for 1.5 seconds before new paragraphs
      }
    }

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
