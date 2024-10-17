var Typed= new Typed(".text", {
    strings: ["Web Designer ", "Frontend Developer", "Web Developer", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar"); 

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("open");
}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content', { origin: 'bottom'});
ScrollReveal().reveal('.home-img', { origin: 'top'});
ScrollReveal().reveal('.main-text', { origin: 'top'});
ScrollReveal().reveal('.about-text h2', { origin: 'top'});
ScrollReveal().reveal('.about-text h4', { origin: 'bottom'});
ScrollReveal().reveal('.about-text ', { origin: 'bottom'});
ScrollReveal().reveal('.about-img', { origin: 'bottom'});
ScrollReveal().reveal('.project-gallary, .port-box', { origin: 'bottom'});
ScrollReveal().reveal('.contact-main, .contact-box', { origin: 'bottom'});
ScrollReveal().reveal('.skills-main', { origin: 'bottom'});







const form = document.querySelector("form");

function sendEmail(){
     Email.send({                                                      // Set mailer to use SMTP
            //SecureToken : "735d93af-103e-4a89-9271-fe174cde68fa",                // Your Gmail password (or app-specific password)
            Host: "smtp.elasticemail.com",
            Username: "deveshparihar197@gmail.com",
            Password: "18076B9505C8178B318EAA72F3F8403D92CE",
            To : 'deveshparihar197@gmail.com',
            From : "deveshparihar197@gmail.com",
            Subject : document.getElementById("subject").value,
            Body : "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Subject: " + document.getElementById("subject").value +
            "<br> Message: " + document.getElementById("message").value
        }).then(
            message => {
                if(message == "OK"){
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                      });
                }
            }

        );
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
          //  sendEmail();
        });
}
