
function Draw(){
      const container = document.getElementsByClassName("container")[0];
     
      container.innerHTML = "";

    const blueCircle = document.createElement("div");
    blueCircle.id = "blue-circle";

    container.append(blueCircle)

    const whiteCircle = document.createElement("div");
    whiteCircle.id = "white-circle";
     
    blueCircle.appendChild(whiteCircle);

    const eyes = document.createElement("div");
    eyes.className = "eyes";

    whiteCircle.appendChild(eyes);

    const eye = document.createElement("div");
    eye.className = "eye";

    eyes.appendChild(eye);

    const eyeBall = document.createElement("div");
    eyeBall.className = "eyeBall";

     eye.appendChild(eyeBall);

    const eyeWhiteDot = document.createElement("div");
    eyeWhiteDot.className = "eye-white-dot";

    eyeBall.appendChild(eyeWhiteDot)

    // Create second eye
  const eye2 = document.createElement("div");
  eye2.className = "eye";
  eyes.appendChild(eye2);

  const eyeBall2 = document.createElement("div");
  eyeBall2.className = "eyeBall";
  eye2.appendChild(eyeBall2);

  const eyeWhiteDot2 = document.createElement("div");
  eyeWhiteDot2.className = "eye-white-dot";
  eyeBall2.appendChild(eyeWhiteDot2);

    const nose = document.createElement("div");
    nose.id = "nose";

    whiteCircle.appendChild(nose);

    const noseDot = document.createElement("div");
    noseDot.id = "nose-dot";

    nose.appendChild(noseDot);

    const vl = document.createElement("div");
    vl.id = "vl";

   whiteCircle.appendChild(vl);

    const mouth = document.createElement("div");
    mouth.id = "mouth";

    whiteCircle.appendChild(mouth)

    const tongue = document.createElement("div");
    tongue.id = "tongue";

    mouth.appendChild(tongue)

    const line1 = document.createElement("div");
    line1.id = "line1";

    whiteCircle.appendChild(line1);

    const line2 = document.createElement("div");
    line2.id = "line2";
    whiteCircle.appendChild(line2);

    const line3 = document.createElement("div");
    line3.id = "line3";
    whiteCircle.appendChild(line3);

    const line4 = document.createElement("div");
    line4.id = "line4";

    whiteCircle.appendChild(line4);

    const line5 = document.createElement("div");
    line5.id = "line5";
    whiteCircle.appendChild(line5);


    const line6 = document.createElement("div");
    line6.id = "line6";
  
    whiteCircle.appendChild(line6);
   


}