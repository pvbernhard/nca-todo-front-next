Esta aplicação é uma página e uma API simples desenvolvida em **Next.js** que gerencia uma lista de tarefas (To-Do list). Utilizando o banco de dados SQLite e a biblioteca **Prisma** para manipulação de dados, é possível realizar as operações básicas de **CRUD** (Criar, Ler, Atualizar e Deletar) em itens de uma tabela chamada "Todos" através da página ou da própria API.

### Funcionalidades principais:
- **`/`** `GET`: Página principal onde é possível gerenciar a lista de tarefas.
- **`/api/todos/`** `GET`: Retorna uma lista de todos os itens "Todo" armazenados no banco de dados.
- **`/api/todos/`** `POST`: Adiciona um novo item "Todo" com um título e um status de conclusão (`completed`), que por padrão é falso.
- **`/api/todos/:id`** `PUT`: Atualiza o título ou status de conclusão de um item específico pelo seu ID.
- **`/api/todos/:id`** `DELETE`: Remove um item "Todo" específico pelo seu ID.

### Objeto JSON fornecido para as rotas de adicionar e atualizar:

Ao criar ou atualizar um item "Todo", você envia o seguinte objeto no corpo da requisição:

```json
{
    "text": "Comprar leite",
    "completed": false
}
```

- **`text`** (obrigatório para `GET /`): String contendo o título da tarefa.
- **`completed`** (opcional): Booleano que indica se a tarefa está concluída ou não. O valor padrão é `false` caso não seja fornecido.

A aplicação é um exemplo básico de gerenciamento de tarefas, implementada de forma simples para manipulação de dados via API ou página.