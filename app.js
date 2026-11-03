const path = require('path');
const express = require('express');

const modulos = require('./config/modulos');
const criarRotas = require('./routes/crud');
const store = require('./models/store');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS e dos arquivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Variáveis e funções disponíveis em todas as views
app.locals.nomeSistema = 'Sistema de Gerenciamento';
app.locals.modulos = modulos;
app.locals.desenvolvedores = 'Kauã Vinícius e Felipe Nunes — 2º DS';
app.locals.moeda = (valor) =>
  Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

app.use((req, res, next) => {
  res.locals.ativo = '';
  res.locals.flash = null;
  next();
});

// Página inicial
app.get('/', (req, res) => {
  const totais = {};
  Object.keys(modulos).forEach((chave) => {
    totais[chave] = store.contar(chave);
  });
  res.render('index', { titulo: 'Início', ativo: 'home', totais });
});

// Rotas de cada módulo: /clientes, /fornecedores e /produtos
Object.values(modulos).forEach((modulo) => {
  app.use('/' + modulo.chave, criarRotas(modulo));
});

// Página não encontrada
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página não encontrada' });
});

// Erros inesperados
// eslint-disable-next-line no-unused-vars
app.use((erro, req, res, next) => {
  console.error(erro);
  res.status(500).render('500', { titulo: 'Erro interno' });
});

app.listen(PORT, () => {
  console.log(`Sistema de Gerenciamento em execução: http://localhost:${PORT}`);
});
