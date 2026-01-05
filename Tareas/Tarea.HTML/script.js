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

/*BOTON IMPRIMIR*/
//===================
const btnImprimir = document.getElementById("btn-imprimir");
const modalImprimir = document.getElementById("modal-imprimir");

btnImprimir.addEventListener("click", () => {
  modalImprimir.classList.remove("oculto");

  setTimeout(() => {
    modalImprimir.classList.add("oculto");
  }, 1500);
});

/*BOTON COMPARTIR*/
//===========================
const btnCompartir = document.getElementById("btn-compartir");
const modalCompartir = document.getElementById("modal-compartir");
const cerrarCompartir = document.getElementById("cerrar-compartir");
const copiarLink = document.getElementById("copiar-link");
const compartirWp = document.getElementById("compartir-wp");

// Abrir modal
btnCompartir.addEventListener("click", () => {
  modalCompartir.classList.remove("oculto");
});

// Cierre de modal
cerrarCompartir.addEventListener("click", () => {
  modalCompartir.classList.add("oculto");
});

// Copiar link 
copiarLink.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);
  alert("📋 Enlace copiado al portapapeles");
});

// WhatsApp ..
compartirWp.addEventListener("click", () => {
  alert("📱 Compartiendo por WhatsApp...");
});