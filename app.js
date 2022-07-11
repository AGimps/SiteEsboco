function funcConfirmar() {
    if (confirm("Deseja enviar a mensagem?") == true) {
      window.alert("Mensagem enviada");
      return true;
  } else {
    window.alert("Envio cancelado");
      return false;
  }
  }