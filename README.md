# Desafio Hello GraphQL

## :rocket: Sobre o desafio

O objectivo desse desafio é criar uma API GraphQL em **Typescript** com:

- Uma **query** com o nome **greeting** que retorna **Welcome to Monark Angola** sempre que for requisitada;
- Uma **mutation** com o nome **greetMe** que recebe um argumento **name** do tipo **string** e retorna **`Hello ${name}`**.

Exemplo dos resultados:

### Query - greeting

```graphql
query Greeting {
  greeting {
    message
  }
}

{
  "data": {
    "greeting": {
      "message": "Welcome to Monark Angola"
    }
  }
}
```

### Mutation - greetMe

```graphql
mutation GreetMe {
  greetMe(name: "Jonh Doe") {
    message
  }
}

{
  "data": {
    "greetMe": {
      "message": "Hello John Doe"
    }
  }
}
```


## 📅 Entrega

Para entregar a sua solução do desafio uma **pull request** nesse repositório.

---

Feito com ♥ by Monark Angola :wave:
