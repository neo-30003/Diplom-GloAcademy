const validateForm = () => {
  const body = document.querySelector(".balkony");
  const usernames = document.querySelectorAll('input[name="fio"]');
  const userphones = document.querySelectorAll('input[name="phone"]');
  const calcInputs = document.getElementById("calc-input");

  usernames.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/g, "");
    });
  });
  const re = /^\d[\d\(\)\ -]{7,14}\d$/;
  userphones.forEach((input) => {
    input.addEventListener("input", (e) => {
      const valid = re.test(e.target.value);
      if (!valid) {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
  });

  if (body) {
    calcInputs.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
  }
};
export default validateForm;
