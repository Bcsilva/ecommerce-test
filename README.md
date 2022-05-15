# React app test - ecommerce API e validações

Este projeto foi criado partir do comando [Create React App](https://github.com/facebook/create-react-app).

Para um desenvolvimento mais organizado, as principais seções da página foram divididas nos seguintes componentes React:

## _home.js

Reune as chamadas de todos os componentes separados da página. Ela usa um estado com o array de objetos `cart` para armazenar produtos adicionados pelo botão comprar, e uma função callback getCartData para ser passada pro componente de prateiras do `shelf.js`, isso será abordado logo menos.

## header.js

Navegação do site, responsiva. No ícone do carrinho, há um contador funcional de produtos do carrinho, que é alimentado pelo estado `cart` via getCartData da _home.js.

## shelf.js

Esse componente é onde a mágica das prateleiras acontece. Os produtos são chamados por uma chamada de API facilitada pela biblioteca externa `axios`. Com os materiais de api em mãos, o componente abastece em um loop array.map no render, assim criando uma coleção de produtos com todas as informações obtidas: imagem, nome, preços, etc. Ao ser invocada pelo _home.js, a shelf recebe a função callback getCartData do mesmo, que abre uma ponte de comunicação para quando clicarmos em comprar um produto da prateleira, os dados de objeto do produto são passados pra ela pela função addToCart. Logo temos uma comunicação entre esses dois componentes.

## newsletter.js

Componente da newsletter, onde podemos preencher com nome e email para enviar informações via POST. Para melhor validação do formulário, foi usado a biblioteca externa `react-hook-form`, que permite uma maior facilidade para construir e validar formulários. Com a validação ok, o `axios` faz o envio da requisição POST de fato, armazenando os dados pelo BODY.

## footer.js

Rodapé da página.

# Comandos básicos para trabalhar

No diretório do projeto, execute o comando:

### `npm start`

Roda o app no modo de desenvolvimento.\
Abra a url [http://localhost:3000](http://localhost:3000) para poder visualizar no seu navegador.

A página sempre irá ser recarregada a cada mudança feita.\
Erros de código poderão ser visuaizado no terminal.

### `npm test`

Executa o runner de testes no modo interativo.\ 
Saiba mais:  [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Cria uma build do app no diretório `build`.\
A build agrupa todo o código da aplicação React para o modo de produção e otimiza o material para uma performance mais enxuta.

A build é minificada e os nomes de arquivos incluem hashes.\
Logo seu app já está pronto para o deploy.

Mais informações [deployment](https://facebook.github.io/create-react-app/docs/deployment).
