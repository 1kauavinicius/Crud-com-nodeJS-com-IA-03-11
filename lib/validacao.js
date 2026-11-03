// Validação e normalização dos dados enviados pelos formulários.
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const REGEX_TELEFONE = /^[\d\s()+\-]+$/;

function validarCampo(campo, bruto) {
  const valor = String(bruto === undefined || bruto === null ? '' : bruto).trim();
  const rotulo = campo.label;

  if (valor === '') return { erro: `Informe ${rotulo.toLowerCase()}.` };

  switch (campo.tipo) {
    case 'texto':
      if (valor.length < 2) return { erro: `${rotulo} deve ter pelo menos 2 caracteres.` };
      if (valor.length > 100) return { erro: `${rotulo} deve ter no máximo 100 caracteres.` };
      return { valor };

    case 'email':
      if (valor.length > 120 || !REGEX_EMAIL.test(valor)) return { erro: 'Informe um e-mail válido.' };
      return { valor: valor.toLowerCase() };

    case 'telefone': {
      const digitos = valor.replace(/\D/g, '');
      if (!REGEX_TELEFONE.test(valor) || digitos.length < 8 || digitos.length > 13) {
        return { erro: 'Informe um telefone válido (8 a 13 dígitos).' };
      }
      return { valor };
    }

    case 'moeda': {
      const numero = Number(valor.replace(',', '.'));
      if (!Number.isFinite(numero) || numero < 0) return { erro: 'Informe um preço válido (maior ou igual a zero).' };
      if (numero > 99999999) return { erro: 'O preço informado é muito alto.' };
      return { valor: Math.round(numero * 100) / 100 };
    }

    case 'inteiro': {
      if (!/^\d+$/.test(valor)) return { erro: 'Informe uma quantidade inteira (zero ou mais).' };
      const numero = Number(valor);
      if (numero > 999999999) return { erro: 'A quantidade informada é muito alta.' };
      return { valor: numero };
    }

    default:
      return { valor };
  }
}

// Retorna { dados, erros }. Se erros estiver vazio, "dados" está pronto para salvar.
function validar(modulo, corpo) {
  const dados = {};
  const erros = {};
  modulo.campos.forEach((campo) => {
    const resultado = validarCampo(campo, corpo[campo.name]);
    if (resultado.erro) erros[campo.name] = resultado.erro;
    else dados[campo.name] = resultado.valor;
  });
  return { dados, erros };
}

module.exports = { validar };
