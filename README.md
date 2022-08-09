# DevTrivia: Adivinhe o nome
![Badge de licensa MIT](https://img.shields.io/badge/license-MIT-blue)

DevTrivia é um projeto de estudo backend inspirado no site RachaCuca e outros apps de trívia.

![Página de categorias do app](https://user-images.githubusercontent.com/75482200/183764269-fa0557a1-259e-479e-803e-a92ddad6b01a.png)

## Linguagens, frameworks e bibliotecas usadas:
`Javascript`
`CSS`
`HTML`
`SQL`
`Node`
`Handlebars`
`Express`
`Body-parser`
`Sequelize`

<img align="left" src="https://user-images.githubusercontent.com/75482200/183768109-7b339535-4244-4421-a7f4-bb7f13187320.png" width="490">
<img align="right" src="https://user-images.githubusercontent.com/75482200/183768232-a7d6903a-dd5a-460f-8bcd-938aef15d3b6.png" width="490">

# :open_file_folder: Acesso ao projeto:
Após baixar o projeto, é necessário ter o mysql ou qualquer outro banco de dados suportado pelo Sequelize.
Com um banco de dados instalado na máquina, é necessário:
- `Criar uma database` pelo seu banco de dados com o nome "devTrivia" e pelo usuário "root", mas você pode personalizar isso modificando os parâmetros da constante "sequelize" em models/db.js.

- `Criar as tabelas de categorias e items`, que podem ser feitas descomentando os métodos sync() em models/Categoria.js e em models/Item.js, ao executar o app será criado as tabelas.

- `Adicionar os registros nas tabelas`, seguindo o exemplo comentado do método create() em models/Categoria.js poderá criar quais e quantas categorias desejar. Para os items também pode seguir o exemplo anterior, mas caso queira repetir os que usei pode copiar os códigos da pasta db.sql.

- `Por fim, execute pelo terminal, dentro da pasta do projeto, o comando "node app.mjs".`
