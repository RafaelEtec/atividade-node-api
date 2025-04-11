![atividade-node-api](https://github.com/user-attachments/assets/fe078279-d4d9-4e41-8f7d-38ef4ce82196)

## Atividade Prática - API Busca CEP 🌎
Consiste em, por meio do Node.js com Express e Axios, consumir APIs que tragam informações do CEP informado, possibilitando armazená-los em cache.

Proposto pelo professor: \
<i>Márcio Paulo Guedes</i> - Conceitos e Visão Geral de Full-stack

## 🛠️Uso
Clonando o repositório:
```
git clone https://github.com/RafaelEtec/atividade-node-api
cd atividade-node-api
```

Instalando Dependências
```
npm install
```

Iniciando Aplicação
```
npm run start
```

Pronto, agora já é possível acessar a API pela URL:
[localhost:3000](http://localhost:3000/)

## Documentação da API

#### Retorna um endereço por CEP

```http
  GET /cep/${cep}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cep`      | `string` | **Obrigatório**. O CEP do endereço que você quer buscar |

#### Armazena o endereço em cache

```http
  POST /enderecos/
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `cep` | `string` | **Obrigatório**. CEP do endereço |
| `referencia` | `string` | **Obrigatório**. Texto de referência para o endereço |

#### Retorna todos os endereços armazenados em cache

```http
  GET /enderecos/
```

#### Retorna o endereço armazenado em cache pelo ID 

```http
  GET /enderecos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do endereço armazenado em cache |

## Rodando os testes

Para rodar os testes, rode o seguinte comando


## 📦 Dependências
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/ptbr/)
- [Node Cache](https://github.com/node-cache/node-cache)
- [ViaCep](https://viacep.com.br/)
