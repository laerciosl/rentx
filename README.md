# Cadastro de Carro

**RF**
[X] Deve ser possível cadastrar um novo carro.
**RNF**

**RN**
[X] Não deve ser possível cadastrar um carro com uma placa já existente.
[X] O carro deve ser cadastrado, por padrão, com disponibilidade.
[] * O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de Carros

**RF**
[] Deve ser possível listar todos carros disponíveis.
[] Deve ser possível listar todos carros disponíveis pelo nome da categoria.
[] Deve ser possível listar todos carros disponíveis pelo nome da marcar.
[] Deve ser possível listar todos carros disponíveis pelo nome do carro.

**RNF**

**RN**
[] O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no Carro

**RF**
[] Deve ser possível cadastrar uma especificação para um carro
[] Deve ser possível listar todas as especificações
[] Deve ser possível listar todos os carros

**RNF**

**RN**
[] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de Imagem do Carro

**RF**
[] Deve ser possível a imagem do carro.
[] Deve ser possível listar todos carros.

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
