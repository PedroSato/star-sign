# star-sign

Api simples que retorna o signo baseado na data de nascimento do usuário

## Começando

Clone esse projeto e execute o comando:

```
npm install
```

Depois de instalar as dependencias você deve pode executar o comando:

```
npm run dev
```

Agora você pode fazer requisições na rota /GET localhost:3333/signo enviando name (String) e birthdate (String "dd-mm-yyyy") como parâmetros da requisição.

Como o banco de dados está na nuvem você pode também fazer uma requisição na rota /GET localhost:3333/signo/lista para receber todos os dados salvos.

### Prerequisitos

```
Node Version 10+
```

## Testando

para executar testes automatizados execute o comando:

```
npm run test
```

## Autor

- **Pedro Hiro Sato** - [PedroSato](https://github.com/PedroSato)

# star-sign

Simple API to return users zodiac sign based on his birthdate

## Getting Started

Clone this project and run the command:

```
npm install
```

After installing the dependencies you can just run the command:

```
npm run dev
```

Now you can make requests at the endpoint /GET localhost:3333/signo sending name(String) and birthdate(String "dd-mm-yyyy") as query parameters

Because the database is running on a cloud service you can make a request at the endpoint /GET localhost:3333/signo/lista to get all the saved data

### Prerequisites

```
Node Version 10+
```

## Running the tests

To run automated tests run the command:

```
npm run test
```

## Author

- **Pedro Hiro Sato** - [PedroSato](https://github.com/PedroSato)
