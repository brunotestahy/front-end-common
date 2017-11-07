# FrontEndCommon

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 1.3.2.

Você pode rodar todos os comandos Angular CLI para desenvolver e testar componentes front-end

O "app" module/component deste projeto serve como "showcase" e como ambiente de desenvolvimento para
a biblioteca de componntes.

## Library Build

Você pode precisar limpar o diretório dist da biblioteca para conseguir rodar o comando ng serve

Para criar novamente este diretório e o arquivo bundlle, rode os seguintes comandos:

```shell
npm run packagr
```

Entre na pasta dist

```shell
cd dist
```
Finalmente crie o pacote npm

```shell
npm pack
```

Este comando criará o pacote npm no arquivo com o nome front-end-common-versão.tgz.
O número da versão no final do nome do arquivo vem do package.json. Este número deverá ser incrementado conforme 
novos deploys forem feitos com novas features na biblioteca.

## Documentação Angular CLI default

### Development server

Run `ng serve` for a dev server. You may need to clean the dist folder. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
