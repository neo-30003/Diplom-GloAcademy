import { animate } from "./helpers";

const calculator = () => {
  const body = document.querySelector(".balkony");
  const calcBlock = document.getElementById("calc");
  const input = document.getElementById("calc-input");
  const total = document.getElementById("calc-total");
  const type = document.getElementById("calc-type");
  const material = document.getElementById("calc-type-material");

  const countCalc = () => {
    const calcTypeValue = type.options[type.selectedIndex].value;
    const calcInputValue = input.value;
    const calcMaterialValue = material.options[material.selectedIndex].value;
    let totalValue;

    totalValue = +calcTypeValue * +calcInputValue * +calcMaterialValue;
    total.value = totalValue;

    if (totalValue !== 0) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          total.value =
            +total.value + Math.round(progress * (totalValue - total.value));
        },
      });
    }
  };

  if (body) {
    calcBlock.addEventListener("input", (e) => {
      if (
        (e.target === type || e.target === material || e.target === input) &&
        type.selectedIndex &&
        material.selectedIndex &&
        input.value
      ) {
        countCalc();
      } else if (
        !type.selectedIndex ||
        !material.selectedIndex ||
        input.value === ""
      ) {
        total.value = 0;
      }
    });
  }
};
export default calculator;
