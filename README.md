# Nome do Projeto

**Sistema de Gerenciamento**

## Integrantes

- Kauã Vinícius
- Felipe Nunes

2º DS

## Objetivo

Sistema web para cadastrar, consultar, editar e excluir clientes, fornecedores e produtos, com uma interface simples, moderna e responsiva.

## Tecnologias Utilizadas

- Node.js
- Express
- EJS
- Bootstrap 5 e Bootstrap Icons
- HTML, CSS e JavaScript

## Funcionalidades

- Página inicial com descrição do sistema, cards de acesso aos módulos e identificação dos desenvolvedores.
- Módulos de **Clientes** (nome, e-mail, telefone), **Fornecedores** (nome, e-mail, telefone) e **Produtos** (nome, preço, estoque).
- CRUD completo em cada módulo: cadastrar, listar, editar e excluir (com confirmação).
- Busca nas listagens, validação dos formulários e mensagens de retorno.
- Layout responsivo (computador e celular).

Como executar:

```bash
npm install
npm start
```

Acesse http://localhost:3000.

## Prompt Utilizado

```text
Quero que você desenvolva e reestruture um sistema web completo de gerenciamento de cadastros, utilizando Node.js, Express, EJS e Bootstrap 5.

O objetivo é criar uma aplicação funcional, organizada, moderna e de fácil utilização, permitindo gerenciar clientes, fornecedores e produtos.

1. Estrutura do sistema
O sistema deverá possuir três módulos principais:
- Clientes: Nome, E-mail, Telefone
- Fornecedores: Nome, E-mail, Telefone
- Produtos: Nome do produto, Preço, Quantidade em estoque
Cada módulo deverá possuir suas próprias páginas e funcionalidades.

2. Funcionalidades
Implemente todas as operações CRUD em cada módulo:
- Cadastrar (Create): permitir adicionar novos registros.
- Listar (Read): apresentar os registros cadastrados em tabelas organizadas.
- Editar (Update): disponibilizar uma tela específica para alterar os dados de um registro existente.
- Excluir (Delete): permitir remover registros, solicitando confirmação antes da exclusão.
Todas as funcionalidades devem estar realmente implementadas e integradas ao sistema.

3. Reestruturação visual
Desenvolva uma interface com Bootstrap 5, utilizando um estilo predominantemente azul.
O visual deverá ser simples, moderno, profissional e organizado, evitando excesso de elementos decorativos.
Não quero apenas uma alteração nas cores. Faça uma melhoria completa na experiência visual e na organização da aplicação.
Implemente:
- Menu de navegação intuitivo.
- Página inicial organizada.
- Cards para acessar cada módulo.
- Tabelas com boa apresentação.
- Formulários modernos e fáceis de preencher.
- Botões de ações com estilos diferentes.
- Ícones discretos e adequados.
- Melhor espaçamento e alinhamento dos elementos.
- Mensagens de confirmação e retorno das operações.
- Layout responsivo para computadores e celulares.

4. Página inicial
Reestrilize as pagina e tambem mude a pagina inicial - Ela deverá apresentar:
- Uma breve descrição do sistema.
- Cards de acesso aos módulos Clientes, Fornecedores e Produtos.
- Uma navegação simples e intuitiva.
- Uma identificação dos desenvolvedores no rodapé ou em uma seção própria: Kauã Vinícius e Felipe Nunes — 2º DS.

5. Tecnologias utilizadas
Node.js, Express, EJS, Bootstrap 5, HTML, CSS e JavaScript.
Organize o código de maneira clara, evitando repetições desnecessárias e mantendo as rotas e os arquivos bem separados.

6. Organização dos arquivos
Crie uma estrutura de pastas organizada, seguindo um padrão profissional.
Sugestão: nodejs_sistema/ (app.js, package.json, README.md, public/css/style.css, public/js, views/index.ejs, views/clientes, views/fornecedores, views/produtos, views/partials).
Crie todos os arquivos necessários para o funcionamento da aplicação.

7. Documentação
Desenvolva um README.md contendo: nome do projeto, integrantes, objetivo do sistema, tecnologias utilizadas, funcionalidades disponíveis, prompt utilizado para o desenvolvimento visual, como a Inteligência Artificial foi utilizada, melhorias sugeridas pela IA, alterações implementadas, espaço para imagens da interface anterior e da atual, espaço para evidências do processo de desenvolvimento, link da aplicação e link do repositório.

8. Qualidade e testes
Antes de finalizar: verifique todas as rotas; teste cadastro, listagem, edição e exclusão; confira se os formulários enviam os dados corretamente; corrija possíveis erros; verifique a responsividade; garanta que os arquivos estejam corretamente conectados; evite funcionalidades incompletas ou botões sem ação.

9. Resultado final
Disponibilize o projeto completo em uma pasta organizada e gere um arquivo ZIP com todos os arquivos necessários.
A aplicação deverá estar pronta para ser aberta no Visual Studio Code e executada com: npm install e npm start.
Não quero apenas exemplos ou trechos de código. Desenvolva a aplicação completa, com todos os arquivos, páginas, rotas, estilos e funcionalidades implementados e funcionando.
```

## Uso da Inteligência Artificial

A IA foi usada para sugerir melhorias de design e para gerar a estrutura do sistema (rotas, telas, estilos e validações) a partir do prompt acima. O grupo revisou o resultado e testou o funcionamento.

## Alterações Sugeridas pela IA

- Trocar o visual por um tema predominantemente azul, simples e profissional (não apenas mudar as cores).
- Criar um menu de navegação fixo e responsivo.
- Criar uma página inicial com descrição do sistema e cards de acesso aos módulos.
- Apresentar os dados em tabelas organizadas, com cabeçalho destacado e busca.
- Usar formulários modernos, com ícones, validação e mensagens de erro.
- Usar botões de ação com cores diferentes (editar em azul, excluir em vermelho).
- Pedir confirmação antes de excluir um registro.
- Exibir mensagens de sucesso e erro após cada operação.
- Indicar estoque baixo e sem estoque nos produtos.
- Melhorar espaçamento e alinhamento e tornar o layout responsivo.
- Separar o código em rotas, validação, configuração dos módulos e armazenamento.

## Alterações Implementadas pelo Grupo

**Implementadas a partir das sugestões da IA:** todas as listadas acima.

**Alterações feitas manualmente pelos integrantes:**

- _Descreva aqui o que o grupo alterou manualmente (textos, cores, ajustes de layout, etc.)._

## Prints da Conversa com a IA

_Insira aqui os prints da conversa com a IA._ ![Tela do Claude](./docs/ImagemClaude.jpeg)
_ ![Tela do Claude](./docs/ImagemClaude2.jpeg)
_ ![Tela do Claude](./docs/ImagemClaude3.jpeg)

## Antes da Reestilização

_Insira aqui o print da interface antes._ _ ![Tela Antes](./docs/telaAntes.jpeg)

## Depois da Reestilização

_Insira aqui o print da interface depois._ ![Tela Depois](./docs/TelaDepois.jpeg)

## Link da Aplicação

_Inserir link do deploy._

## Link do Repositório

(https://github.com/1kauavinicius/Crud-com-nodeJS-com-IA-03-11.git)