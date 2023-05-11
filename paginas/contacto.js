// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_5hx8wtj';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });

const btn = document.getElementById('button');
const emailInput = document.getElementById('email_id');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
  if (!emailRegex.test(emailInput.value)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return false;
  } else {
    alert('Correo electrónico válido!');
    return true;
  }
}


document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validateEmail()) {
  
    return;
  }

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_5hx8wtj';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
     btn.value = 'Send Email';
     alert('Enviado!');
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
});
