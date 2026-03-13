
    const input = document.querySelector("#userInput");
    const output = document.querySelector("#tvText");

    const rules = [
      {
        pattern: /bonjour|salut|hello/i,
        response: "Bonjour à vous aussi."
      },
      {
        pattern: /comment ça va|la forme/i,
        response: "Je fonctionne correctement. Merci de vous en inquiéter."
      },
      {
        pattern: /ton nom/i,
        response: "Je suis une entité JavaScript. Rien de mystique."
      },
      {
        pattern: /.*/,
        response: "Je n'ai pas encore de réponse pour ça."
      }
    ];

    input.addEventListener("input", (e) => {
      const value = e.target.value.trim();
      const match = rules.find(rule => rule.pattern.test(value));
      output.textContent = match.response;
    });

function changeText() {
let date1 = Date();
    document.getElementById("tvText").innerText = 
    "Il est actuellement" + " " + date1;
}

function clearText() {
    document.getElementById("tvText").innerText = "";
}
