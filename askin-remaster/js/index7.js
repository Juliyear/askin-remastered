document.addEventListener("DOMContentLoaded", function () {
    // Recuperar as respostas do localStorage
    const storedAnswers = localStorage.getItem('answers');
    const answers = storedAnswers ? JSON.parse(storedAnswers) : null;
  
    // Exibir as respostas no console (substitua por sua lógica específica)
    console.log("Respostas em Index 3:", answers);
  
    // Perguntas correspondentes
    const questionTexts = [
      "Você ficou nervosa ou ansiosa quando esteve com Juliano Paulo?",
      "Você costuma pensar nele durante seu dia, mesmo sem falar com ele?",
      "Existe algum interesse romântico da sua parte em relação a ele?",
      "Você já sentiu ciúmes dele?",
      "Gostaria de passar mais tempo junto com ele?",
      "Você consideraria a possibilidade de ter um relacionamento mais sério com esse cara?",
      // Adicione as perguntas restantes conforme necessário
    ];
  
    // Aqui você pode adicionar a lógica para exibir as respostas no conteúdo da página
    if (answers) {
      const answerList = document.createElement('ul');
  
      answers.forEach((answer, index) => {
        const questionText = questionTexts[index];
        const answerText = answer === 1 ? 'Sim' : 'Não';
  
        const listItem = document.createElement('li');
        listItem.innerHTML = `${questionText} <span class="red">${answerText}</span>`;
        answerList.appendChild(listItem);
      });
  
      document.body.appendChild(answerList);
    } else {
      console.log("Nenhuma resposta encontrada.");
    }
});
  