let orderValue = document.querySelector(".zero");
let buttons = document.querySelectorAll(".btn");

let zero = parseInt(orderValue.textContent);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    zero += 1;
    orderValue.textContent = zero;
    console.log(zero);
  });
});
