![banner](https://github.com/Norton794/petZ/blob/master/banner.JPG)
# petZ
## Aplicação Node.js que simula um site para cadastro de animais para doação

<!--ts-->
   * [Sobre](#Sobre)
   * [Status](#Status)
   * [Features](#Features)
   * [Pré-Requisitos](#Pré-Requisitos)
   * [Como Usar](#Como)
   * [Tecnologias Utilizadas](#Tecnologias)
   * [Autor](#Autor)
<!--te-->

### #Sobre

A aplicação PetZ consiste em uma aplicação de página única para o cadastro de animais para adoção. É bem simples e só utiliza uma tabela do banco de dados MongoDB e uma função do multer.js para fazer o upload da imagem escolhida para a pasta public/fotos.
A aplicação cria uma tabela PetZ na localhost.
O componente section class="animais" é dimâmico e lista os pets cadastrados no banco e através do campo foto ele mostra a imagem do animal a partir da pasta fotos.
O Multer.js, além de fazer o upload, comprime as imagens para o formato .webp.
A imagem que utilizei está hospedada no site Pexels (https://www.pexels.com/pt-br/foto/cachorro-com-pelo-curto-branco-160846/)
### #Status
:construction_worker: Em construção

### #Features
- [x] Listagem dos Pets Cadastrados
- [x] Cadastro de Pets

### Pré-requisitos

- [x] Win 10
- [x] Mongo DB
- [x] Mongo Compass
- [x] Node.js (versão mais atualizada)
- [x] Git
- [x] VSCode (ou similares)

### #Como executar esse projeto

```bash
# Clone este repositório
$ git clone <https://github.com/Norton794/petZ/>


# Instale as dependências
$ npm install

# Execute a aplicação 
$ nodemon index.js

# O servidor inciará na porta:8080 - acesse <http://localhost:8080> 
```

### #Tecnologias Utilizadas:

- [Node.js](https://nodejs.org/)
- [Multer.js](https://www.npmjs.com/package/multer)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [Handlebars](https://handlebarsjs.com/)
- [JQuery](https://code.jquery.com/jquery-3.6.0.min.js)
- [Máscara de Input para Telefone](https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js)

### #Autor

#### Norton dos Santos  

#### nortonsantos79@gmail.com



