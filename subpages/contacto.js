const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5hx8wtj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar correo';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar correo';
      alert(JSON.stringify(err));
    });
});