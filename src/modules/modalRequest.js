const modalRequest = () => {
  const requestBtn = document.querySelector("#header .button");
  const offerBtn = document.querySelector(".utp-button");
  const overlay = document.querySelector(".overlay");
  const requestModal = document.querySelector(".header-modal");
  const closeBtn = document.querySelector(".header-modal__close");

  const openModal = () => {
    requestModal.style.display = "flex";
    document.body.style.oveflow = "hidden";
    overlay.style.display = "flex";
  };

  requestBtn.addEventListener("click", () => {
    openModal();
  });

  offerBtn.addEventListener("click", () => {
    openModal();
  });

  closeBtn.addEventListener("click", () => {
    requestModal.style.display = "none";
    document.body.style.oveflow = "";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".header-modal")) {
      requestModal.style.display = "none";
      document.body.style.oveflow = "";
      overlay.style.display = "none";
    }
  });
};

export default modalRequest;
