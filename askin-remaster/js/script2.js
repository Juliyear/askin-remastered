// Função para mostrar a próxima mensagem e imagem com efeito de fade
function showNextMessage(index) {
    const messages = document.querySelectorAll('h1[id^="message"]');
    const images = document.querySelectorAll('img[id^="image"]');
    const buttonContainer = document.querySelector('#buttonContainer');

    if (index <= messages.length) {
        fadeOut(messages[index - 1]);
        fadeOut(images[index - 1]);
        fadeOut(buttonContainer);

        setTimeout(() => {
            messages[index - 1].style.display = 'none';
            images[index - 1].style.display = 'none';
            buttonContainer.innerHTML = ''; // Remover o botão anterior

            fadeIn(messages[index]);
            fadeIn(images[index]);
            fadeIn(buttonContainer);

            if (index < messages.length) {
                buttonContainer.innerHTML = `<button class="button" onclick="showNextMessage(${index + 1})">➝</button>`;
            } else {
                if (index === messages.length && index !== 13) {
                    buttonContainer.innerHTML = ''; // Não há mais mensagens, limpar o contêiner de botões
                }
            }
        }, 500); // Tempo para a animação de fade out
    }
}

// Função para aplicar o efeito de fade in
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s';

    setTimeout(() => {
        element.style.display = 'block';
        element.style.opacity = 1;
    }, 100); // Adiciona um pequeno atraso para garantir que a transição seja aplicada
}

// Função para aplicar o efeito de fade out
function fadeOut(element) {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s';
}

// Função para mostrar a mensagem inicial
function showInitialMessage() {
    showNextMessage(1);
}

// Iniciar o temporizador para mostrar a próxima mensagem após 5 segundos
setTimeout(showInitialMessage, 5000);
