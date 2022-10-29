var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString(
    "The <strong><span style = 'color :  #124ca4;'> Simplest</span></strong> and<strong><span style ='color: #124ca4;'> Fastest<span></strong>"
  )
  .pauseFor(300)
  .deleteChars(7)
  .typeString("<strong><span style ='color:#124ca4;'>Easiest way </span></strong>to deliver ")
  .typeString("in - app Contents to users!<strong>")
  .pauseFor(1000)
  .start();
