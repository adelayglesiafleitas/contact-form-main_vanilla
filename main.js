//color del contenedor de los radio
document.addEventListener("DOMContentLoaded", function () {
  const container_query_l = document.getElementById("container_query_l");
  const container_query_r = document.getElementById("container_query_r");
  const general_enquiry = document.getElementById("general_enquiry");
  const support_request = document.getElementById("support_request");

  // Función para cambiar el fondo según el radio seleccionado
  function updateBackground() {
    if (general_enquiry.checked) {
      container_query_l.style.backgroundColor = "var(--GreenLighter)"; // Color para General Enquiry
      container_query_r.style.backgroundColor = "var(--White)"; // Resetear el otro contenedor
    } else if (support_request.checked) {
      container_query_r.style.backgroundColor = "var(--GreenLighter)"; // Color para Support Request
      container_query_l.style.backgroundColor = "var(--White)"; // Resetear el otro contenedor
    }
  }
  // Event listeners para detectar cuando cambia la selección
  general_enquiry.addEventListener("change", updateBackground);
  support_request.addEventListener("change", updateBackground);

  // Ejecutar una vez al cargar la página para el estado inicial
  updateBackground();
});

const formData = document.getElementById("contacted_form");
//formulario
formData.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firt_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const modal = document.getElementsByClassName("container_modal")[0];
  const container_query_l = document.getElementById("container_query_l");
  const container_query_r = document.getElementById("container_query_r");
  const consent = document.getElementById("consent");
  let isValid = true;

  // Reiniciar errores
  const errorElements = document.getElementsByClassName("error");
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].style.display = "none"; // Ocultar todos los mensajes de error al inicio
  }

  // Validar campos
  if (firstName === "") {
    isValid = false;
    document.querySelector("#firt_name + .error").style.display = "block"; // Mostrar error específico
  }
  if (lastName === "") {
    isValid = false;
    document.querySelector("#last_name + .error").style.display = "block"; // Mostrar error específico
  }
  if (email === "") {
    isValid = false;
    document.querySelector("#email + .error").style.display = "block"; // Mostrar error específico
  }
  if (message === "") {
    isValid = false;
    document.querySelector("#message + .error").style.display = "block"; // Mostrar error específico
  }
  if (!consent.checked) {
    isValid = false;
    const errorP = document.getElementsByClassName("error")[5];
    errorP.style.display = "block";
  }
  if (!isValid) {
    // Aquí puedes realizar otras acciones si es necesario
    console.log("El formulario no es válido.");
  } else {
    // Aquí puedes enviar el formulario o realizar otras acciones
    modal.style.display = "block";

    // Después de 3 segundos, iniciamos la animación de desaparición
    setTimeout(function () {
      modal.classList.remove("show");
      modal.classList.add("hide");

      // Después de 0.5 segundos (cuando la animación termina), ocultar completamente
      setTimeout(function () {
        modal.style.display = "none";
        modal.classList.remove("hide");
      }, 500);
    }, 1000);

    container_query_r.style.backgroundColor = "var(--White)";
    container_query_l.style.backgroundColor = "var(--White)";
    formData.reset();
    console.log("Formulario enviado con éxito.");
  }
});
