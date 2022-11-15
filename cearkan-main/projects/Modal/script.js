let modalOpen = document.querySelector("#open");
let modalForm = document.querySelector("#form");
let modal = document.querySelector(".modal");
let modalClose = document.querySelector("#close");

modalOpen.addEventListener("click", () => {
  modal.style.display = "flex";
  console.log("clicked open button");
  setTimeout(() => {
    modalForm.style.left = "50%";
  }, 201);
});
modalClose.addEventListener("click", () => {
  modalForm.style.left = "-100%";
  console.log("clicked close button");
  setTimeout(() => {
    modal.style.display = "none";
  }, 202);
});
