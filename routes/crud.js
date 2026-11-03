// Fábrica de rotas CRUD: gera as rotas de um módulo a partir da sua configuração.
const express = require('express');
const store = require('../models/store');
const { validar } = require('../lib/validacao');

module.exports = function criarRotas(modulo) {
  const router = express.Router();
  const base = '/' + modulo.chave;

  const mensagens = {
    criado: { tipo: 'success', texto: `${modulo.singular} cadastrado com sucesso!` },
    atualizado: { tipo: 'success', texto: `${modulo.singular} atualizado com sucesso!` },
    excluido: { tipo: 'success', texto: `${modulo.singular} excluído com sucesso!` },
    nao_encontrado: { tipo: 'danger', texto: `${modulo.singular} não encontrado.` }
  };

  // Variáveis disponíveis para todas as views do módulo.
  router.use((req, res, next) => {
    res.locals.modulo = modulo;
    res.locals.ativo = modulo.chave;
    res.locals.base = base;
    res.locals.flash = mensagens[req.query.msg] || null;
    next();
  });

  // LISTAR (com busca opcional)
  router.get('/', (req, res) => {
    const q = String(req.query.q || '').trim();
    let registros = store.listar(modulo.chave);
    if (q) {
      const termo = q.toLowerCase();
      registros = registros.filter((r) =>
        modulo.campos.some((c) => String(r[c.name]).toLowerCase().includes(termo))
      );
    }
    res.render(`${modulo.chave}/index`, { titulo: modulo.plural, registros, q });
  });

  // FORMULÁRIO DE CADASTRO
  router.get('/novo', (req, res) => {
    res.render(`${modulo.chave}/novo`, { titulo: `Novo ${modulo.singular}`, registro: {}, erros: {} });
  });

  // CADASTRAR
  router.post('/', (req, res) => {
    const { dados, erros } = validar(modulo, req.body);
    if (Object.keys(erros).length) {
      return res.status(400).render(`${modulo.chave}/novo`, {
        titulo: `Novo ${modulo.singular}`,
        registro: req.body,
        erros
      });
    }
    store.criar(modulo.chave, dados);
    res.redirect(`${base}?msg=criado`);
  });

  // FORMULÁRIO DE EDIÇÃO
  router.get('/:id/editar', (req, res) => {
    const registro = store.buscar(modulo.chave, req.params.id);
    if (!registro) return res.redirect(`${base}?msg=nao_encontrado`);
    res.render(`${modulo.chave}/editar`, { titulo: `Editar ${modulo.singular}`, registro, erros: {} });
  });

  // ATUALIZAR
  router.post('/:id/editar', (req, res) => {
    const existente = store.buscar(modulo.chave, req.params.id);
    if (!existente) return res.redirect(`${base}?msg=nao_encontrado`);

    const { dados, erros } = validar(modulo, req.body);
    if (Object.keys(erros).length) {
      return res.status(400).render(`${modulo.chave}/editar`, {
        titulo: `Editar ${modulo.singular}`,
        registro: { ...req.body, id: existente.id },
        erros
      });
    }
    store.atualizar(modulo.chave, req.params.id, dados);
    res.redirect(`${base}?msg=atualizado`);
  });

  // EXCLUIR
  router.post('/:id/excluir', (req, res) => {
    const removido = store.remover(modulo.chave, req.params.id);
    res.redirect(`${base}?msg=${removido ? 'excluido' : 'nao_encontrado'}`);
  });

  return router;
};
