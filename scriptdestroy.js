const img = document.getElementById("triggerImage");

img.addEventListener("click", function() {

    // changer texte
    //document.getElementById("title").textContent = "Nouveau titre";

    // changer paragraphe
    document.getElementById("hola").textContent = "Dark mode activé";

    // changer image
    document.querySelector(".img7").style.backgroundImage = "url('dinosaur.png')";

    // changer background
    document.body.style.backgroundColor = "black";
    var els = document.getElementById ("hola");
    els.style.color = "white";

});
