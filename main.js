const formData = document.getElementById("contacted_form");

/*//validacion de color
const container_query = document.getElementById("container_query");
const container_query_r = document.getElementById("container_query_r");
const general_enquiry = document.getElementById("general_enquiry").Checked;
const support_request = document.getElementById("support_request").Checked;


general_enquiry.addEventListener("click", (e) => {
  const container_query_type_l = document.getElementsByClassName(
    "container_query_type_l"
  );
  const container_query_r =
    document.getElementsByClassName("container_query_r")[0];

  container_query_type_l.style.backgroundColor = "rgb(224, 241, 231);";
});*/

//formulario
formData.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firt_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const modal = document.getElementsByClassName("container_modal")[0];
  const consent = document.getElementById("consent").Checked;
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
  if (consent) {
    isValid = false;
    document.querySelector("#consent + .error").style.display = "block"; // Mostrar error específico
  }

  if (!isValid) {
    // Aquí puedes realizar otras acciones si es necesario
    console.log("El formulario no es válido.");
  } else {
    // Aquí puedes enviar el formulario o realizar otras acciones
    modal.style.display = "block";
    formData.reset();
    console.log("Formulario enviado con éxito.");
  }
});
