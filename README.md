### Estrutura de pastas

```
src/
    env/
        .env
        .env.example
        index.js
    models/
        user-schema.js
    repository/
        user-repository.js
    services/
        user-service.js
    routes.js
    server.js
```

#### Como executar: 

    - Este projeto foi criado com node 20.10.0. Cheque qual versão do node (node -v) está instalada na máquina e mude se necessário.
    - Clone este repositório. Vá em um terminal e procure um diretório que possa ser clonado e utilize: ``git clone https://github.com/P9DRIN/goAndSlay-challenge.git``
    - Abra o repositório clonado. Em seu editor de código de preferência, instale os pacotes do projeto utilizando ``npm install``.
    - É possível executar este projeto de duas formas: No modo de desenvolvedor, digite no terminal: ``npm run dev``. No modo de produção, é só digitar ``npm run server``. O modo de desenvolvedor reinicia automaticamente caso haja uma exceção (erro).
    - Faça fetch para o projeto usando a url base indicada no terminal, ou se preferir: ``http://localhost:3000/``
    
#### Create, Read, Update, Delete - Rotas:

    - Para criar um usuário, utilize a rota: http://localhost:3000/users , informe o corpo da requisição, formatando como JSON as seguintes informações: "name": "Coloque aqui o desejado", "email": "Coloque o email desejado", "age": "Idade desejada" -> Metodo POST
    - Para atualizar um usuário específico, utilize a rota: http://localhost:3000/users/(id do usuario), informe o corpo da requisição formatando como JSON assim como no criar um usuário, com as informações desejadas. -> Metodo PUT
    - Para ver a lista de usuários, utilize a rota: http://localhost:3000/users -> Metodo GET
    - Para ver um usuário específico, utilize a rota: http://localhost:3000/users/(id do usuario) -> Metodo GET
    - Para remover um usuário específico, utilize a rota: http://localhost:3000/users/(id do usuario) -> Metodo DELETE

