# NLW_Together_NODE.js
Semana rumo ao próximo nível Rocketseat.

## Regras
- Cadastro de usuário
    
    [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    
    [x] Não é permitido cadastrar usuário sem e-mail

- Casdatro de TAG
    
    [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
    
    [x] Não é permitido cadastrar tag sem nome
    
    [x] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios
    
    [ ] Não é permitido um usuário cadastrar um elogio para si
    
    [ ] Não é permitido permitido cadastrar elogios para usuários inválidos
    
    [ ] O usuário precisa estar autenticado na aplicação

# informações adicionais

## Camadas
- Repositories:

    onde manipula o banco de dados
        a camada onde faz a manipulação dos dados, e camada responsavel em se conectar com o banco de dados tem a manipulação as buscas, as inserções de dados, tu que tem relação a manipulação com banco de dados fica dentro do repositories.
        
    resumo: Repositories = faz manipulação dos dados no banco de dados.

- Services

    onde fica tudo realcionado a validações a regras de negocios, tudo que for referente aquela funcionalidade que fizermos, exemplo: validar campos, verificar se um elemento esta duplicado no banco de dados. tudo que for regras de negocios, coneitos funcioanlidaddes do sistema
    
- Controllers

    é apenas uma camada de transição de informação, serve para pegar as informações do request e passar para o serviços e retornar uma informação de onde foi feita a request
    
    so serve para transitar informações que esta vindo da rota passando para os service e retornando para quem solicitou as responta
    
- Middlewares or providers

    funcioanlidades que conseguimos implementar dentro da aplicação 

- Database

- Entities or models

    entidade são as classe que vao ter refencias para o banco de dados 
    
- server