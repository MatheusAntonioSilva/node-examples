## POS-IN-NODE

### Descrição

- Projeto voltado a estudo de Design Patterns em NodeJs, aplicação construida após aulas da Especialização de Desenvolvimento Full Stack
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