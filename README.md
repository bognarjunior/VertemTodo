# Todo App - React Native

Este é um aplicativo simples de gerenciamento de tarefas desenvolvido em React Native. O projeto inclui funcionalidades para listar tarefas, adicionar novas tarefas, alterar o status de uma tarefa (pendente/concluído) e remover tarefas concluídas.

### Funcionalidades

* Listagem de tarefas.
* Adicionar novas tarefas.
* Alterar o status das tarefas (pendente/concluído).
* Limpar tarefas concluídas.

### Requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

* Node.js
* Android Studio para emulação Android.
* Xcode para emulação iOS (somente macOS).
* Yarn ou npm.

### Passo a passo
1. Clonar o repositório

$ git clone [https://github.com/bognarjunior/VertemTodo](https://github.com/bognarjunior/VertemTodo)

$ cd VertemTodo

2. Instalar dependências

Instale as bibliotecas necessárias com:
```
$ npm install
```
ou
```
$ yarn install
```
3. Bibliotecas instaladas

As seguintes bibliotecas foram utilizadas no projeto:

React Navigation: Para navegação entre as telas.
```
$ npm install @react-navigation/native
$ npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-get-random-values
$ npm install @react-navigation/stack
```
Context API: Incluído no React para gerenciamento de estado global.
(Não é necessário instalar bibliotecas adicionais, pois é nativo do React.)

4. Configurar o ambiente nativo

iOS:
Certifique-se de ter o Xcode instalado. Navegue até o diretório do projeto e execute:
```
$ npx pod-install
```

Android:
Certifique-se de que o Android Studio e as ferramentas da linha de comando estejam configurados.

5. Rodar o projeto

Para Android:
```
$ npx react-native run-android
```
Para iOS:
```
$ npx react-native run-ios
```
