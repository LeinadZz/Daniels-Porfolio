function sendEmail() {
    Email.send({
        SecureToken : "0a4a0cf3-dc34-4126-a51b-e35760dc0fbb",
        To : 'daniel.gutierrezwd@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Inquiry",
        Body : "Name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Email successfully sent.")
    );
}