

var form = document.getElementById("formContacto");

async function handleSubmit(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  let status   = document.getElementById("formContacto-status");
  //Validación de datos del formulario
  let correo   = document.getElementById('email');
  let nombre   = document.getElementById('nombre');
  let apellido = document.getElementById('apellido');
  let validacionCorreo = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/gm;
  let validacionNomApe = /^([a-zA-Z ]){2,30}$/gm;
  let validacionTel    = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{1,3})[-. )]*)?((\d{1,3})[-. ]*(\d{2,4})(?:[-. ]*(\d+))?)\s*$/gm;
  if( !validacionCorreo.test(correo.value) ){
    status.innerHTML = 'No se pudo validar el correo.';
    die;
  }
  if( !validacionNomApe.test(nombre.value) ){
    status.innerHTML = 'No se pudo validar el nombre.';
    die;
  }
  if( !validacionNomApe.test(apellido.value) ){
    status.innerHTML = 'No se pudo validar el apellido.';
    die;
  }
  if( !validacionTel.test(apellido.value) ){
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
      
      /*
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Hubo un problema al enviar el formulario."
          }
        })
        */
    }
  }).catch(error => {
    status.innerHTML = "Hubo un problema al enviar el formulario."
  });
}
form.addEventListener("submit", handleSubmit)
