var i = 0;
var txt1 =
  "Hi Love.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time In A Ur Borther Status< You seems something Special to me.  <<                  As the days goes < you get closer to me from my side ....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me But Honestly Something You need to Change too...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <SweetHeart Mona 💕 .....! |                  <<<< Kept It Secret.. by @Mr.SoulHAcker[محمد أفسارول الحق ]";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
