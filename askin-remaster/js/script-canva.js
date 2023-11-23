document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("drawingCanvas");
    const context = canvas.getContext("2d");
  
    let isDrawing = false;
  
    // Configurar eventos do mouse para desenhar
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  
    function startDrawing(event) {
      isDrawing = true;
      draw(event); // Inicia o desenho imediatamente
    }
  
    function draw(event) {
      if (!isDrawing) return;
  
      const x = event.clientX - canvas.offsetLeft;
      const y = event.clientY - canvas.offsetTop;
  
      context.lineWidth = 3;
      context.lineCap = "round";
      context.strokeStyle = "#000";
  
      context.lineTo(x, y);
      context.stroke();
      context.beginPath();
      context.moveTo(x, y);
    }
  
    function stopDrawing() {
      isDrawing = false;
      context.beginPath(); // Inicia uma nova trilha
    }
  });
  