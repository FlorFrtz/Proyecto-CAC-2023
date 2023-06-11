


var form = document.getElementById("formContacto");

async function handleSubmit(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  let status   = document.getElementById("formContacto-status");
  //Validación de datos del formulario
  let correo   = document.getElementById('email');
  let nombre   = document.getElementById('nombre');
  let apellido = document.getElementById('apellido');
  let celular  = document.getElementById('celular');
  let validacionCorreo = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/gm;
  let validacionNom    = /^([a-zA-Z ]){2,30}$/gm;
  let validacionApe    = /^([a-zA-Z ]){2,30}$/gm;
  let validacionTel    = /^\+?([- (]*(\d{1,20}))$/gm;
  if( !validacionCorreo.test(correo.value) ){
    status.innerHTML = 'No se pudo validar el correo.';
    die;
  }
  if( !validacionNom.test(nombre.value) ){
    status.innerHTML = 'No se pudo validar el nombre.';
    die;
  }
  if( !validacionApe.test(apellido.value) ){
    status.innerHTML = 'No se pudo validar el apellido.';
    die;
  }
  if( !validacionTel.test(celular.value) ){
    status.innerHTML = 'No se pudo validar el teléfono.';
    die;
  }

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Gracias por contactarte con nosotros!";
      form.reset()
    } else {
      status.innerHTML = "Hubo un problema al enviar el formulario."
    }
  }).catch(error => {
    status.innerHTML = "Hubo un problema al enviar el formulario."
  });
}
form.addEventListener("submit", handleSubmit)
