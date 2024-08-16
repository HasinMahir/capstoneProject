//Declaring all Profile Buttons, Each name for each profile
jerry_button = document.getElementById("jerry");
ayaan_button = document.getElementById("ayaan");
rafael_button = document.getElementById("rafael");
hasin_button = document.getElementById("hasin");

jerry_canvas = document.getElementById("jerryCanvas");
ayaan_canvas= document.getElementById("ayaanCanvas");
rafael_canvas = document.getElementById("rafaelCanvas");
hasin_canvas = document.getElementById("hasinCanvas");


jerry_button.onclick = function() {
    document.getElementById("jerryCanvas").style.display = "block";
    document.getElementById("ayaanCanvas").style.display = "none";
    document.getElementById("rafaelCanvas").style.display = "none";
    document.getElementById("hasinCanvas").style.display = "none";

    // THIS IS WHERE YOU PUT YOUR DESCRIPTION
    let j_description = document.createElement("p");
    j_description.textContent = "jerry's description";

    j_description.style.color = "black";
    j_description.style.display = "flex";
    j_description.style.padding = "10px"

    jerry_canvas.appendChild(j_description);
}


ayaan_button.onclick = function() {
    document.getElementById("jerryCanvas").style.display = "none";
    document.getElementById("ayaanCanvas").style.display = "block";
    document.getElementById("rafaelCanvas").style.display = "none";
    document.getElementById("hasinCanvas").style.display = "none";

    // THIS IS WHERE YOU PUT YOUR DESCRIPTION
    let a_description = document.createElement("p");
    a_description.textContent = "ayaan's description";

    a_description.style.color = "black";
    a_description.style.display = "flex";
    a_description.style.padding = "10px"

    ayaan_canvas.appendChild(a_description);
}


rafael_button.onclick = function() {
    document.getElementById("jerryCanvas").style.display = "none";
    document.getElementById("ayaanCanvas").style.display = "none";
    document.getElementById("rafaelCanvas").style.display = "block";
    document.getElementById("hasinCanvas").style.display = "none";

    // THIS IS WHERE YOU PUT YOUR DESCRIPTION
    let r_description = document.createElement("p");
    r_description.textContent = "My name is Rafael Martos, and I'm a Junior at Thomas A. Edison CTE Highschool, and I'm currently going through the Robotics and Pre-engineering technical program. I'm a growing artist trying to get into the creative arts within engineering and pursuing self-discovery within these many fields. Feel free to check out my work and any upcoming projects!";

    r_description.style.color = "black";
    r_description.style.display = "flex";
    r_description.style.padding = "10px"

    rafael_canvas.appendChild(r_description);
}


hasin_button.onclick = function() {
    document.getElementById("jerryCanvas").style.display = "none";
    document.getElementById("ayaanCanvas").style.display = "none";
    document.getElementById("rafaelCanvas").style.display = "none";
    document.getElementById("hasinCanvas").style.display = "block";

    let h_description = document.createElement("p");
    h_description.textContent = "Hi! My name is Hasin Mahir. I am currently a Junior at Brooklyn Technical High School. I am also part of the Mechatronics and Robotics major. I am apart of the All Star Code Summer Intensive. I am interested in the tech field and pursuing a career in engineering.";

    h_description.style.color = "black";
    h_description.style.display = "flex";
    h_description.style.padding = "10px"
    h_description.style.fontSize = "50px"

    hasin_canvas.appendChild(h_description);
}
