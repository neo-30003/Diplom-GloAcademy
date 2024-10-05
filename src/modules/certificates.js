const certificates = () => {
  const docsImg = document.querySelectorAll(".sertificate-document");

  const docsModal = document.createElement("div");
  docsModal.innerHTML = `<div class="document-modal-content"><img src="images/documents/original/document4.jpg" alt="" ></div>`;
  docsModal.classList.add("document-modal");
  document.body.appendChild(docsModal);

  const openModal = () => {
    docsModal.classList.add("is-open");
  };

  const closeModal = (e) => {
    const modalImg = document.querySelector(".document-modal-content>img");
    if (e.target !== modalImg) {
      docsModal.classList.remove("is-open");
    }
  };

  if (document.querySelector(".sertificate-document")) {
    const docsItem = document.querySelectorAll(".documents-item");
    docsItem.forEach((doc) => {
      const overlay = document.querySelector(".document-overlay");
      docsImg.src = doc.getAttribute("href");
      doc.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target === overlay) {
          openModal();
        }
      });
    });
  }
  docsModal.addEventListener("click", closeModal);
};
export default certificates;
