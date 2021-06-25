bibliotecas instaladas na aplicação
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D "usado somente em DESENVOLVIMENTO"


Padrao de token:
https://jwt.io/


yarn typeorm migration:create -n AlterUserAddPassword
yarn typeorm migration:run

yarn add bcryptjs
yarn add @types/bcryptjs -D

yarn typeorm migration:create -n CreateCompliments

yarn typeorm migration:run