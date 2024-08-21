const sendForm = () => {
  const forms = document.querySelectorAll(".order-form.rf, .box-modal_body.rf");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = form.querySelector('input[name="fio"]');
      const userphone = form.querySelector('input[name="phone"]');
      const responseModal = document.querySelector("#responseMessage");
      const modalContent = responseModal.querySelector(".modal-content");
      const overlay = document.querySelector(".overlay");
      const closeBtn = responseModal.querySelector(
        ".btn.btn-success.fancyClose"
      );
      const requestModal = document.querySelector(".header-modal");
      const serviceModal = document.querySelector(".services-modal");
      const total = document.getElementById("calc-total");

      const closeAnswer = () => {
        username.value = "";
        userphone.value = "";
        username.classList.remove("error");
        userphone.classList.remove("error");
        requestModal.style.display = "none";
        serviceModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "";
        responseModal.classList.add("open");
        responseModal.style.position = "fixed";
        responseModal.style.left = "38%";
        responseModal.style.top = "40%";
      };

      let data = {
        name: username.value,
        phone: userphone.value,
        orderPrice: 0,
      };

      if (total) {
        if (total.textContent !== null && total.textContent !== 0) {
          data.orderPrice = total.textContent;
        }
      }

      if (username.value === "") {
        username.classList.add("error");
      } else {
        username.classList.remove("error");
      }
      username.addEventListener("focusout", () => {
        username.classList.remove("error");
      });
      if ((userphone.value = "")) {
        userphone.classList.add("error");
      }

      if (username.closest(".error") || userphone.closest(".error")) {
        return;
      } else {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => {
            res.json();
            modalContent.innerHTML = "Спасибо за вашу заявку";
            closeAnswer();
          })
          .catch((error) => {
            error.message;
            console.log(error.message);
            modalContent.innerHTML = "Ошибка";
            modalContent.style.cssText = "color:red; font-size:20px";
            closeAnswer();
          });

        closeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          responseModal.classList.remove("open");
          modalContent.innerHTML = "";
        });
      }
    });
  });
};

export default sendForm;
