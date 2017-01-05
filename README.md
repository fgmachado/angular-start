## Angular Start Project

**Aviso!** Este projeto está em desenvolvimento, assim como sua documentação.

## Arquivos do projeto

Os arquivos necessários para a utilização deste projeto são:

```
src/
www/
.bowerrc
bower.json
gulpfile.js
package.json
```

### Diretório src

Em ```src``` estão os arquivos do código-fonte.

### Diretório www

No diretório ```www``` ficam os arquivos compilados e as ```views```, 
ou seja, todo conteúdo público da aplicação.

### .bowerrc

O arquivo ```.bowerrc``` é um arquivo de configurações do 
[Bower](https://bower.io/ "A package manager for the web"),  onde é 
configurado o caminho onde o gerenciador de pacotes deve adicionar 
as dependências do projeto.

### bower.json

```bower.json``` também é um arquivo do Bower, nele ficam as dependências 
do projeto e configurações referentes ao projeto.

### gulpfile.js

```gulpfile.js``` é o arquivo de configuração do build. Este build é feito 
pelo [Gulp](http://gulpjs.com/ "Automate and enhance your workflow"), nele 
estão definidas diversas tasks que são executadas ao executar o comando 
```gulp build``` no seu prompt de comandos.

### package.json

### Configuration

A configuração é bastante simples, você precisa alterar o valor da chave 
```api``` para a url de sua API.  
Esta configuração está no arquivo ```app.constants.js```, este arquivo 
pode ser encontrado no diretório ```src/app/config```.  
Segue abaixo código deste arquivo, você pode adicionar suas próprias 
configurações adicionando propriedades no objeto ```app```;

```
(function () {
    'use strict';

    var app = {
        'api': 'http://localhost/api/',
        'views': 'views/'
    };

    angular
        .module('angularStart')
        .constant('AppConfig', app);
}());
```

### Build

Para executar o build do projeto, execute o comando abaixo dentro do 
diretório que está seu projeto.

```
gulp build 
```

Este comando irá executar uma task disponível no arquivo ```gulpfile.js```.
