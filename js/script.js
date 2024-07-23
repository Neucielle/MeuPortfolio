document.addEventListener('DOMContentLoaded', function () {
    // Configuração inicial do áudio
    var audioElement = document.getElementById('audio-player');
    audioElement.volume = 0.2;

    // Criação e animação de estrelas
    document.addEventListener('mousemove', function (event) {
        const starContainer = document.getElementById('star-container');
        const { clientX: mouseX, clientY: mouseY } = event;

        // Cria uma nova estrela
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${mouseX}px`;
        star.style.top = `${mouseY}px`;

        starContainer.appendChild(star);

  
        const fallDuration = Math.random() * 1.8 + 1;
        star.style.opacity = 1;
        star.style.transition = `top ${fallDuration}s linear`;


        setTimeout(() => {
            star.style.top = `${mouseY + 500}px`;
        }, 0);


        setTimeout(() => {
            star.remove();
        }, fallDuration * 1000);
    });


    document.getElementById('audio-toggle').addEventListener('click', function (event) {
        event.preventDefault();

        const audio = document.getElementById('audio-player');

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });


    document.querySelector('.view-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('curriculo-modal').style.display = 'block';
    });


    document.querySelector('.close-btn').addEventListener('click', function () {
        document.getElementById('curriculo-modal').style.display = 'none';
    });


    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('curriculo-modal')) {
            document.getElementById('curriculo-modal').style.display = 'none';
        }
    });


    emailjs.init("vAkLpwCSKcKibEIqn");

    // Envio de e-mail através do formulário
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        emailjs.sendForm('service_l6fge72', 'template_846d1zj', this)
            .then(function (response) {
                alert('Mensagem enviada com sucesso!');
                document.getElementById('contact-form').reset();
            }, function (error) {
                alert('Falha no envio da mensagem: ' + JSON.stringify(error));
            });
    });
});
