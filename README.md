# Cadastro de Carro

**RF**
[X] Deve ser possível cadastrar um novo carro.
**RNF**

**RN**
[X] Não deve ser possível cadastrar um carro com uma placa já existente.
[X] O carro deve ser cadastrado, por padrão, com disponibilidade.
[X] * O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de Carros

**RF**
[X] Deve ser possível listar todos carros disponíveis.
[X] Deve ser possível listar todos carros disponíveis pelo nome da categoria.
[X] Deve ser possível listar todos carros disponíveis pelo nome da marca.
[X] Deve ser possível listar todos carros disponíveis pelo nome do carro.

**RNF**

**RN**
[X] O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no Carro

**RF**
[X] Deve ser possível cadastrar uma especificação para um carro

**RNF**

**RN**
[X] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[X] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
[X] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de Imagem do Carro

**RF**
[] Deve ser possível a imagem do carro.

**RNF**
[] Utilizar o multer para upload dos arquivos

**RN**
[] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de Carro

**RF**
[] Deve ser possível cadastrar um alguel


**RNF**

**RN**
[] O aluguel deve ter duração mínima de 24 horas.
[] Não deve ser possivel cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuario.
[] Não deve ser possivel cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
[] O usuário deve estar logado na aplicação 
