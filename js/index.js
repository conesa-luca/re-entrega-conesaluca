document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
 
    if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
      console.log("Por favor, complete todos los campos.");
      return;
    }
  

    console.log("Nombre: " + name);
    console.log("Email: " + email);
    console.log("Asunto: " + subject);
    console.log("Mensaje: " + message);
  
 
    document.getElementById("contact-form").reset();
  });
  