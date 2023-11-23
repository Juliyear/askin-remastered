document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.question');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const answers = new Array(questions.length).fill(null);
  
    let currentQuestion = 0;
  
    function showNextQuestion() {
      const selectedRadioButton = document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`);
  
      if (selectedRadioButton) {
        // Atualizar o vetor de respostas
        answers[currentQuestion] = selectedRadioButton.value === 'sim' ? 1 : 0;
      }
  
      // Aplicar o efeito de fade-in na pergunta atual
      fadeIn(questions[currentQuestion]);
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        // Exibir a próxima pergunta
        fadeIn(questions[currentQuestion]);
      } else {
        // Exibir o botão de envio
        fadeIn(document.getElementById('submitButton'));
      }
    }
  
    radioButtons.forEach(function (radio) {
      radio.addEventListener('change', showNextQuestion);
    });
  
    // Exibir a primeira pergunta
    fadeIn(questions[currentQuestion]);
});

// Função para aplicar o efeito de fade-in
function fadeIn(element) {
  element.style.opacity = 0;

  if (element.id === 'submitButton') {
    element.style.display = 'inline';
  } else {
    element.style.display = 'block';
  }

  (function fade() {
    var val = parseFloat(element.style.opacity);
    if (!((val += 0.1) > 1)) {
      element.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}


  function processAnswers() {
    // Obter as respostas
    const answers = getAnswers();
  
    // Criar a mensagem do alerta
    let alertMessage = "Tem certeza que deseja enviar as respostas a seguir?\n\n";
  
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
      const questionText = question.querySelector('label').textContent.trim();
      const answerText = answers[index] === 1 ? 'Sim' : 'Não';
      alertMessage += `${questionText}: ${answerText}\n`;
    });
  
    // Adicionar botões 'Sim' e 'Não' ao alerta
    alertMessage += "\n";
    alertMessage += "Clique em 'Sim' para confirmar ou 'Não' para cancelar o envio.";
  
    // Exibir o alerta personalizado
    const userConfirmation = confirm(alertMessage);
  
    if (userConfirmation) {
      // Verificar as respostas e redirecionar ou exibir mensagem de agradecimento
      checkAndRedirect(answers);
    } else {
      alert("Envio cancelado.");
    }
  }
  
  function getAnswers() {
    const answerElements = document.querySelectorAll('input[type="radio"]:checked');
    const answers = Array.from(answerElements).map(element => element.value === 'sim' ? 1 : 0);
    return answers;
  }
  
  function checkAndRedirect(answers) {
    // Armazenar as respostas no localStorage
    localStorage.setItem('answers', JSON.stringify(answers));
  
    // Verificar se as respostas atendem às condições para o redirecionamento
    if (
      answers[2] === 1 &&
      answers[5] === 1
    ) {
      // Redirecionar para index2.html
      window.location.href = 'index2.html';
    } else {
      // Exibir mensagem de agradecimento
      alert("Obrigado pelas respostas, Mayara Viali. Sua colaboração e honestidade são muito importantes para mim :)");
    }
  }
  