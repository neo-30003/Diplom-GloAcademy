const serviceModal = () => {
  const serviceRequestsBtns = document.querySelectorAll(".service-button");
  const serviceModal = document.querySelector(".services-modal");
  const overlay = document.querySelector(".overlay");
  const serviceCloseBtn = document.querySelector(".services-modal__close");

  const openServiceModal = () => {
    serviceModal.style.display = "flex";
    document.body.style.oveflow = "hidden";
    overlay.style.display = "flex";
  };

  const closeServiceModal = () => {
    serviceModal.style.display = "none";
    document.body.style.oveflow = "";
    overlay.style.display = "none";
  };

  serviceRequestsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openServiceModal();
    });
  });

  serviceCloseBtn.addEventListener("click", () => {
    closeServiceModal();
  });

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".services-modal")) {
      closeServiceModal();
    }
  });
};
export default serviceModal;
