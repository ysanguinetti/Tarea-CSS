// ==========================
// TACHADO DE INGREDIENTES
// ==========================
const checkboxes = document.querySelectorAll(
  ".lista-ingredientes input[type='checkbox']"
);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const texto = checkbox.nextElementSibling;

    if (checkbox.checked) {
      texto.style.textDecoration = "line-through";
      texto.style.color = "#999";
    } else {
      texto.style.textDecoration = "none";
      texto.style.color = "#333";
    }
  });
});

// ==========================
// BOTÓN GUARDAR + MODAL LOGIN
// ==========================
const btnGuardar = document.getElementById("btn-guardar");
const modal = document.getElementById("modal-login");
const cerrarModal = document.getElementById("cerrar-modal");

btnGuardar.addEventListener("click", () => {
  modal.classList.remove("oculto");
});

cerrarModal.addEventListener("click", () => {
  modal.classList.add("oculto");
});