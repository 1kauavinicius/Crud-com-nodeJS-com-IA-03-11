// Persistência simples em arquivo JSON (data/db.json), sem dependências nativas.
const fs = require('fs');
const path = require('path');

const ARQUIVO = path.join(__dirname, '..', 'data', 'db.json');

const DADOS_INICIAIS = {
  seq: { clientes: 3, fornecedores: 3, produtos: 4 },
  clientes: [
    { id: 1, nome: 'Ana Beatriz Lima', email: 'ana.lima@exemplo.com', telefone: '(11) 91234-5678' },
    { id: 2, nome: 'Carlos Eduardo Souza', email: 'carlos.souza@exemplo.com', telefone: '(21) 99876-5432' },
    { id: 3, nome: 'Mariana Oliveira', email: 'mariana.oliveira@exemplo.com', telefone: '(31) 98765-4321' }
  ],
  fornecedores: [
    { id: 1, nome: 'Distribuidora Alfa', email: 'contato@alfa.com', telefone: '(11) 3456-7890' },
    { id: 2, nome: 'Tech Suprimentos', email: 'vendas@techsuprimentos.com', telefone: '(19) 3344-5566' },
    { id: 3, nome: 'Papelaria Central', email: 'atendimento@papelariacentral.com', telefone: '(41) 3222-1100' }
  ],
  produtos: [
    { id: 1, nome: 'Teclado sem fio', preco: 129.9, estoque: 25 },
    { id: 2, nome: 'Mouse óptico', preco: 59.5, estoque: 4 },
    { id: 3, nome: 'Monitor 24 polegadas', preco: 899, estoque: 0 },
    { id: 4, nome: 'Cabo HDMI 2m', preco: 24.9, estoque: 60 }
  ]
};

function carregar() {
  try {
    return JSON.parse(fs.readFileSync(ARQUIVO, 'utf8'));
  } catch (erro) {
    // Primeira execução (ou arquivo inválido): cria a base com dados de exemplo.
    const base = JSON.parse(JSON.stringify(DADOS_INICIAIS));
    salvar(base);
    return base;
  }
}

function salvar(db) {
  fs.mkdirSync(path.dirname(ARQUIVO), { recursive: true });
  fs.writeFileSync(ARQUIVO, JSON.stringify(db, null, 2), 'utf8');
}

function colecao(db, nome) {
  if (!Array.isArray(db[nome])) db[nome] = [];
  if (!db.seq) db.seq = {};
  if (typeof db.seq[nome] !== 'number') {
    db.seq[nome] = db[nome].reduce((max, r) => Math.max(max, r.id), 0);
  }
  return db[nome];
}

module.exports = {
  listar(nome) {
    const db = carregar();
    return colecao(db, nome).slice().sort((a, b) => a.id - b.id);
  },

  contar(nome) {
    return this.listar(nome).length;
  },

  buscar(nome, id) {
    const db = carregar();
    return colecao(db, nome).find((r) => r.id === Number(id)) || null;
  },

  criar(nome, dados) {
    const db = carregar();
    const lista = colecao(db, nome);
    db.seq[nome] += 1;
    const registro = { id: db.seq[nome], ...dados };
    lista.push(registro);
    salvar(db);
    return registro;
  },

  atualizar(nome, id, dados) {
    const db = carregar();
    const lista = colecao(db, nome);
    const indice = lista.findIndex((r) => r.id === Number(id));
    if (indice === -1) return null;
    lista[indice] = { id: lista[indice].id, ...dados };
    salvar(db);
    return lista[indice];
  },

  remover(nome, id) {
    const db = carregar();
    const lista = colecao(db, nome);
    const indice = lista.findIndex((r) => r.id === Number(id));
    if (indice === -1) return false;
    lista.splice(indice, 1);
    salvar(db);
    return true;
  }
};
