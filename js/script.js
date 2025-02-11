const toggleBtn = document.querySelector("#toggle_button")
const toggleBtnIcon = document.querySelector("#toggle_button i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open")

  const isOpen = dropDownMenu.classList.contains("open")

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


const submitBtn = document.querySelector(".submit_btn")

submitBtn.addEventListener("click", active);

function active() {
  submitBtn.classList.toggle("is_active");
}