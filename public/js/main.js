document.addEventListener('DOMContentLoaded', function () {
  // Validação visual dos formulários (Bootstrap)
  document.querySelectorAll('.needs-validation').forEach(function (form) {
    form.addEventListener('submit', function (evento) {
      if (!form.checkValidity()) {
        evento.preventDefault();
        evento.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });

  // Modal de confirmação de exclusão: ajusta a ação e o nome do registro
  var modal = document.getElementById('modalExcluir');
  if (modal) {
    modal.addEventListener('show.bs.modal', function (evento) {
      var botao = evento.relatedTarget;
      if (!botao) return;
      document.getElementById('formExcluir').setAttribute('action', botao.getAttribute('data-action'));
      document.getElementById('nomeExcluir').textContent = botao.getAttribute('data-nome');
    });
  }

  // Fecha automaticamente as mensagens de retorno
  document.querySelectorAll('[data-auto-dismiss]').forEach(function (alerta) {
    setTimeout(function () {
      if (window.bootstrap) bootstrap.Alert.getOrCreateInstance(alerta).close();
    }, 5000);
  });
});
