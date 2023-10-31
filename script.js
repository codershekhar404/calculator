let string = "";

let buttons = document.querySelectorAll("input[type='button']");
let operator = document.querySelectorAll(".operator");

Array.from(buttons).forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    var display = document.querySelector("#display");

    try {
      if (e.target.value == "=") {
        string = eval(string);
        display.value = string;
      } else if (e.target.value == "AC") {
        string = "";
        display.value = string;
      } else if (e.target.value == "C") {
        string = string.toString().slice(0, -1);
        display.value = string;
      } else {
        string += e.target.value;
        display.value = string;
      }
    } catch (error) {
      display.value = "";
      alert("There was an error: " + error);
    }
  });
});
