// Configuração dos módulos do sistema.
// Cada módulo descreve seus campos; rotas, validação e views reutilizam essa definição.
module.exports = {
  clientes: {
    chave: 'clientes',
    singular: 'Cliente',
    plural: 'Clientes',
    icone: 'bi-people',
    descricao: 'Cadastre e mantenha os dados de contato dos seus clientes.',
    campos: [
      { name: 'nome', label: 'Nome', tipo: 'texto', input: 'text', placeholder: 'Ex.: Maria Souza', icone: 'bi-person' },
      { name: 'email', label: 'E-mail', tipo: 'email', input: 'email', placeholder: 'maria@exemplo.com', icone: 'bi-envelope' },
      { name: 'telefone', label: 'Telefone', tipo: 'telefone', input: 'tel', placeholder: '(11) 91234-5678', icone: 'bi-telephone' }
    ]
  },
  fornecedores: {
    chave: 'fornecedores',
    singular: 'Fornecedor',
    plural: 'Fornecedores',
    icone: 'bi-truck',
    descricao: 'Organize os fornecedores e seus contatos comerciais.',
    campos: [
      { name: 'nome', label: 'Nome', tipo: 'texto', input: 'text', placeholder: 'Ex.: Distribuidora Alfa', icone: 'bi-building' },
      { name: 'email', label: 'E-mail', tipo: 'email', input: 'email', placeholder: 'contato@alfa.com', icone: 'bi-envelope' },
      { name: 'telefone', label: 'Telefone', tipo: 'telefone', input: 'tel', placeholder: '(11) 3456-7890', icone: 'bi-telephone' }
    ]
  },
  produtos: {
    chave: 'produtos',
    singular: 'Produto',
    plural: 'Produtos',
    icone: 'bi-box-seam',
    descricao: 'Controle os produtos, seus preços e o estoque disponível.',
    campos: [
      { name: 'nome', label: 'Nome do produto', tipo: 'texto', input: 'text', placeholder: 'Ex.: Teclado sem fio', icone: 'bi-tag' },
      { name: 'preco', label: 'Preço', tipo: 'moeda', input: 'number', step: '0.01', min: '0', placeholder: '0,00', prefixo: 'R$' },
      { name: 'estoque', label: 'Quantidade em estoque', tipo: 'inteiro', input: 'number', step: '1', min: '0', placeholder: '0', icone: 'bi-stack' }
    ]
  }
};
