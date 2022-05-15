const https = require("https");

const adviceIdTarget = document.querySelector(".advice-id");
const adviceTextTarget = document.querySelector(".advice-text-inner");
const dice = document.querySelector(".dice");

dice.addEventListener("click", async () => {
  const req = await https
    .request("https://api.adviceslip.com/advice", (res) => {
      var body = "";
      res.on("data", (d) => {
        body += d;
      });
      res.on("end", () => {
        var data = JSON.parse(body);
        adviceIdTarget.innerHTML = data.slip.id;
        adviceTextTarget.innerHTML = data.slip.advice;
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
  req.end();
});
