function iniciarMapa (){
  let coord= {lat:-34.6037389 , lng:-58.3841453};
  let = new google.mpas.Map(document.getElementById("map"),{
    zoom:10,
    center:coord
  });
  let marker=new google.maps.Marker({
    position:coord,
    map:map
  });  
}



let form = document.getElementById("formContacto");
debugger;
async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("formContacto-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      alert("Gracias por completar el formulario");
    } else {
      response.json().then(data => {
          status.innerHTML = "Hubo un problema al enviar su formulario"
        }
      )
    }
  }).catch(error => {
    status.innerHTML = "Hubo un problema al enviar su formulario"
  });
}
form.addEventListener("submit", handleSubmit)