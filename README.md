# Alguns projetos Node - Pós Graduação ou estudos a parte.

Monorepo - Projetos Node feitos durantes PÓS Graduação em Especialização de Desenvolvimento Full Stack ou estudos particulares.

---

### APIs Node


### Descrição

- Projeto voltado a demonstração de implementação de API web separada por diversas layers, aplicação construida após aulas da Especialização de Desenvolvimento Full Stack
- As seguintes APIs abaixo estão disponíveis

#### Clientes
- Parametros **name, email, password**, formato: **application/x-www-form-urlencoded**
```
POST /customers
GET /customers
GET /costomers/:customerId
PUT /costomers/:customerId
DELETE /costomers/:customerId
```

#### Produtos
- Parametros **name, email, password**, formato: **application/x-www-form-urlencoded**
```
POST /products
GET /products
GET /products/:productId
PUT /products/:productId
DELETE /products/:productId
```

#### Verificação de logs
- Parametros **name, email, password**, formato: **application/x-www-form-urlencoded**

```
GET /logs
GET /logs/:logId
```

### Autenticação

```POST
/auths
```

- Autenticado com sucesso passar **x-access-token** com seu token no `headers`

---

## Aplicação de Conceitos de API REST com Nível 3

Esse repositório foi construido afins de validação de conhecimento adquirido em **pós graduação** de **Especialização em Desenvolvimento Full Stack** na UNIVEM.

### APIs dispóniveis

```
GET pokemons/first/version
GET pokemons/first/version/:id
GET pokemons/second/version/:id
GET pokemons/third/version/:id
```
