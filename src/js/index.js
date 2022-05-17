const https = require("https");

const adviceIdTarget = document.querySelector(".advice-id");
const adviceTextTarget = document.querySelector(".advice-text-inner");
const dice = document.querySelector(".dice-container");

const getAdvice = () => {
  const req = https
    .request("https://api.adviceslip.com/advice", (res) => {
      var body = "";
      res.on("data", (d) => {
        body += d;
      });
      res.on("end", () => {
        var data = JSON.parse(body);
        adviceIdTarget.innerHTML = "ADVICE #" + data.slip.id;
        adviceTextTarget.innerHTML = data.slip.advice;
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
  req.end();
};

window.addEventListener("load", () => {
  adviceIdTarget.innerHTML = "ADVICE #...";
  adviceTextTarget.innerHTML = "Loading...";
  getAdvice();
});

dice.addEventListener("click", () => {
  adviceIdTarget.innerHTML = "ADVICE #...";
  adviceTextTarget.innerHTML = "Loading...";
  getAdvice();
});
