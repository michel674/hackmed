This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Plataforma GenteLab

Projeto [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/) pra construção de uma plataforma online de aprendizado no modelo LXP.

### Instalação

1. Baixe o repositório.
2. Instale as dependências com
   `npm install`

### Dependências

A plataforma foi construída a partir de um banco de dados SQL hospedado no Heroku, em conjunto com o BaaS do Hasura. A integração foi feita sobre com [Relay](https://relay.dev/docs/en/introduction-to-relay), [relay-hooks](https://www.npmjs.com/package/relay-hooks) e [get-graphql-schema](https://www.npmjs.com/package/get-graphql-schema) (para atualizar o schema local de acordo com o remoto). _Mutations_ e compilações são feitas com auxílio da [Relay Tools](https://github.com/relay-tools), em especial o _[mutation](https://github.com/relay-tools/react-relay-mutation)_ e o _[compiler](https://github.com/relay-tools/relay-compiler-language-typescript)_, respectivamente. O _design pattern_ e as estilizações foram feitas com [styled-components](https://styled-components.com/docs) e [Fort Awesome](https://fortawesome.com/). O video e grande parte das suas funcionalidades ficaram a cargo da [react-player](https://github.com/cookpete/react-player).

### GraphQL Schema

Os _schemas_ do seu banco de dados são gerados automaticamente para seu código pelo uso da lib [get-graphql-schema](https://www.npmjs.com/package/get-graphql-schema), cuja documentação esclarece bastante a sintaxe dos _scripts_ oferecidos. A atualização do _schema_ não acontece de forma automática, o que significa que cada alteração no banco de dados deve ser seguida por um _update_ no _schema_ do app, para que os _schema_ estejam sempre alinhados. É importante deletar o arquivo `schema.graphql` antes de rodar o _script_ e gerar um _schema_ novo sempre que tal operação seja necessária.

### Queries & Mutations

Toda _query/mutation_, de acordo com as regras do relay, devem possuir o nome do componente, assim como está escrito no arquivo, sufixadas pelo nome da operação, e.g., observe uma busca pelo id dos usuários:

#### <a name="ex1">Exemplo 1</a>

nome do arquivo: example-file-name.ts

```typescript
import graphql from "babel-plugin-relay/macro";
query anyNameYouWant = graphql`
query exampleFileNameQuery {
        user {
            id
        }
    }`
```

É fundamental que o `graphql` importado seja o oferecido pela `'babel-plugin-relay/macro'`, caso contrário a _query_ não será feita.

A chamada da _query_ deve ser feita através do _hook_ `useQueryHook`, que recebe como argumentos a constante na qual a _query_ está guardada, as variáveis dessa _query_ e as opções adicionais. O padrão seguido é o de estabelecer uma constate para a(s) variáveis e passar essa constante como parâmetro do _hook_. Segue um exemplo de uso do _hook_ com variáveis e opções:

#### <a name="ex2">Exemplo 2</a>

```typescript
import React from "react";
import { useParams } from "react-router-dom";
import { QueryOptions } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
query anyNameYouWant = graphql`
query exampleFileNameQuery($user_id: Int) {
        user(where: {_id: {_eq: $user_id}})
    }`

export const ExampleFileName: React.FC = () => {
    const params = useParams()
    const id = Number(Object.values(params));
    const queryVariables = {
        student_id: id
    }

    const queryOptions: QueryOptions = {
        fetchPolicy = "store-and-network";
    }
    const {data, err, loading, retry } = useQueryHook(anyNameYouWant, queryVariables, queryOptions)
}
```

Note que a _query_ precisa também saber o tipo da variável, por isso logo após o título (entenda por "título" o trecho "`query exampleFileNameQuery`"), passamos dentro de parênteses o nome da variável prefixado por um \$, seguido do tipo da informação, de acordo com os modelos _graphql_: Int, String, Float, etc. Diferentes variáveis devem ser separadas por vírgula. O _hook useGetParamsAndStudentId_ retorna um objeto com o id do material (desde que esse id esteja nos _params_ da URL) e o id do estudante (desde que o id esteja no LocalStorage) como um objeto.

Quando a _query_ é feita ao menos uma vez, o Relay gera automaticamente um _schema_ para aquela _query_ específica (e a atualiza toda vez que a _query_ for alterada, para assimilar as mudanças), via `npm run relay`, que está incluído em todo `npm run start` nesse projeto. Caso o Relay não tenha conseguido fazer a compilação, você deverá receber um erro que te indicará como ajustar sua _query_ para que a compilação possa ser feita. Outrossim o Relay gerará automaticamente um arquivo para a _query_ numa pasta chamada `__generated___`. A tipagem criada nessa pasta já pode ser utilizada na construção do seu componente, que agora saberá o que significa esse `data` que o `useQueryHook` entrega.

#### <a name="ex3">Exemplo 3</a>

```ts
import React from "react";
import { useParams } from "react-router-dom";
import { QueryOptions } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import { exampleFilenameQueryVariables, exampleFileNameQuery } from "./__generated__";

query anyNameYouWant = graphql`
query exampleFileNameQuery {
        user {
            id
        }
    }`

export const ExampleFileName: React.FC = () => {
    const params = useParams()
    const id = Number(Object.values(params));
    const queryVariables: exampleFilenameQueryVariables = {
        user_id: id
    }

    const queryOptions: QueryOptions = {
        fetchPolicy = "store-and-network";
    }
    const {data, err, loading, retry } = useQueryHook<exampleFileNameQuery>(anyNameYouWant, queryVariables, queryOptions)
}
```

Observe o **`exampleFileNameQuery`** sendo passado depois do `useQueryHook`. Esse tipo só ficará disponível depois que o Relay fizer a compilação, que também pode ser feita separada do `npm run start` com o `npm run relay` . A partir de agora, quando `data`for inserido dentro do componente, o Typescript saberá te oferecer as opções adequadads de como tratar o `data`, que no caso seria algo como `data.user`.

Variáveis devem preferencialmente ser arquivadas em `const` com um nome que deixe claro o que está sendo passado e uma vez que a compilação foi feita, você pode tipar a variável `queryVariables`. Note que ambas tipagens são importadas do `__generated__`, o Relay deixa tudo pronto. Segue o exemplo do uso de uma variável para buscar um `user` específico, cujo `id` se encontra no `param` da _URL_.:

#### <a name="ex4">Exemplo 4</a>

```ts
import React from "react";
import { useParams } from "react-router-dom";
import { QueryOptions } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import { exampleFilenameQueryVariables, exampleFileNameQuery } from "./__generated__";

query anyNameYouWant = graphql`
query exampleFileNameQuery($user_id: Int) {
        user (where: {_id: {_eq: $user_id}})
    }`

export const ExampleFileName: React.FC = () => {
    const params = useParams()
    const id = Number(Object.values(params));
    const queryVariables: exampleFilenameQueryVariables = {
        user_id: id
    }

    const queryOptions: QueryOptions = {
        fetchPolicy = "store-and-network";
    }
    const {data, err, loading, retry } = useQueryHook<exampleFileNameQuery>(anyNameYouWant, queryVariables, queryOptions)
}
```

Mutations seguem o mesmo padrão básico: uma constante que guarda a sintaxe _graphql_ da _mutation_, passada como argumento num _hook_, nesse caso o `useMutation`. Vamos supor que queremos alterar o nome do `user`.

#### <a name="ex5">Exemplo 5</a>

```ts
import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "relay-hooks";

const changeUserMutation = graphql`
    mutation exampleFileNameMutation {
        update_user(where: {_id: {_eq: 00}}, _set: {name: "new user name"})
    }
    `

    export const ExampleFileName: React.FC = () => {
        const [ updateUserName ] = useMutation(changeUserMutation)

  };

    return (
    <LoadingState data={data} error={err} loading={loading} shimmer={<Shimmer />}>
    <button onClick={() => updateUserName()}>Change user name</button>
    </LoadingState>
    )
    }
```

Note que o `useMutation`entrega uma função que executa a _mutation_ ao ser invocada - ao contrário das _queries_ que são invocadas quando o componente renderiza. As regras de variável destacadas no [exemplo 2](#ex2) também se aplicam aqui, e caso haja necessidade de passar uma _mutation_ específica, basta passar as variáveis assim como é feito na _query_.

Também é importante notar no exemplo o uso do `LoadingState`, que é componente que faz o tratamento de `error`, `loading` e `data`, o uso do `LoadingState` é altamente recomendável em _[containers](https://reactpatterns.com/#container-component)_.

#### Detalhes sobre o useQueryHook

O `useQueryHook` é o método padrão de fazer _fetch_ nos componentes dessa aplicação. Ele recebe três parâmetros: a _query_ propriamente dita, uma variável `GraphQLTaggedNode`que é o tipo padrão de todas as _queries_ feitas com o `graphql` descrito [acima](#ex1), um objeto contendo as variáveis como descrito [aqui](#ex2) e um terceiro e opcional objeto que contém as opções de _fetch_. Dentre as opções, as mais relevante de se entender estão:

##### skip

`skip` espera um _boolean_ e determina se a _query_ deve ser feita ou não. Um caso de uso dessa opção pode ser observado no `useAuthenticationHookQuery`, onde o `skip: true` é aplicado para evitar um _fetch_ inicial desnecessário e depois alterado para `skip: false` quando o _fetch_ deve ser realizado (_i. e._, quando o componente possui os dados do usuário). Há um bug na `relay-hooks`que impede que um _fetch_ seja realizado quando o `skip: true` está configurado mesmo que um `retry` seja solicitado.

##### fetchPolicy

`fetchPolicy` define quais as condições sob as quais um _fetch_ deve ser realizado. As opções são: _"network-only"_: o _fetch_ sempre será realizado, independente de haver dados em _cache_ ou não. Essa opção é utilizada nos botões de favorito para que eles se mantenham sempre atualizados - caso contrário, o React poderia usar os dados em _cache_ e se poupar de fazer outro _fetch_. O resultado seria que se, por exemplo, um usuário favoritasse um material e saísse para outro material, quando ele voltasse para o primeiro, o componente não faria outro _fetch_ para saber se o material havia sido favoritado ou não, e ao clicar no botão de _like_ o usuário inseriria outro like no banco de dados, ao invés de remover o _like_ que ele fez previamente. Caso nenhuma opção seja passada, o padrão é o `"store-or-network"` que percorre primeiro o _cache_ para saber se um _fetch_ precisa ser realizado. Como precisamos manter o estado dos botões sempre atualizados no caso do favorite, passamos o `"network-only"`. A opção `"store-and-network"` pode ser útil em alguns casos, porque ela sempre envia uma solicitação para fazer o _fetch_, mas reusa dados em _cache_. Finalmente, pode-se evitar fazer um _fetch_ sempre, usando o `"store-only"`.

### Autenticação

A autenticação é feita em duas partes: uma no [Firebase](https://firebase.google.com/) e uma no [Hasura](https://hasura.io/). O cadastro de cada novo usuário deve ser feito no `/admin`. Todo usuário novo gerado deve gerar também um uuid automático no banco de dados do Hasura que servirá para identificar o usuário no cadastro. Assim que um usuário é criado, o Hasura automaticamente envia um email via webhook para o estudante. O email deverá conter uma mensagem de boas vindas e um *link* que direcione o usuário para "endereço-do-site/signup/uuid-gerado-no-cadastro". Esse *uuid* identifica o usuário para o *app*, e resta para o novo usuário apenas o trabalho de cadastrar sua senha. Ao cadastrar a senha, um novo usuário é criado no Firebase, onde a autenticação é, de fato, feita. O Firebase gerará também um ID para o usuário que o *app*, durante a autenticação, deverá adicionar aos dados do usuário no Hasura, o que doravante melhorará a identificação dele.
