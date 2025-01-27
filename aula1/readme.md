### **Aula 1: Introdução ao JavaScript**

#### **Objetivo**

Aprender o que é JavaScript, como usá-lo em um arquivo HTML e entender os conceitos básicos de variáveis e tipos de dados.

#### **Conteúdo**

1. **O que é JavaScript?**

   - Linguagem de programação de alto nível, usada principalmente para adicionar interatividade a páginas web.
   - Executada no navegador (frontend) ou no servidor (backend, com Node.js).

2. **Como usar JavaScript**

   - Integrar diretamente em um arquivo HTML usando a tag `<script>`.

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Minha Primeira Página com JS</title>
     </head>
     <body>
       <h1>Bem-vindo ao JavaScript!</h1>
       <script>
         console.log("Hello, JavaScript!");
       </script>
       <script type="text/javascript" src="aula1.js"></script>
     </body>
   </html>
   ```

3. **Variáveis**

   - Usadas para armazenar dados.
   - Tipos de declaração:
     - `var` (desatualizado, mas ainda funcional)
     - `let` (recomendado para variáveis que podem mudar)
     - `const` (recomendado para variáveis imutáveis)

   ```javascript
   let nome = "João";
   const idade = 30;
   console.log(nome, idade);
   ```

4. **Tipos de Dados**

   - Principais tipos:
     - String: `"Texto"`
     - Number: `42`
     - Boolean: `true` ou `false`
     - Undefined: Variável declarada sem valor.
     - Null: Representa ausência de valor.

   ```javascript
   let mensagem = "Olá, Mundo!";
   let numero = 42;
   let ativo = true;
   console.log(typeof mensagem); // "string"
   console.log(typeof numero); // "number"
   console.log(typeof ativo); // "boolean"
   ```

5. **Retornando dados ao HTML**

- Definir um ID para o elemento no HTML.
  - Exemplo:
  ```
  <h2 id="exemplo"></h2>
  ```
- Atribuindo valor no JS
  - Exemplo:
  ```
  document.getElementById("exemplo").innerHTML = "text"
  ```

---

#### **Desafio**

1. Crie um arquivo HTML que exiba o texto "Aprendendo JavaScript" no navegador.
2. Use o console do JavaScript para exibir:
   - Seu nome.
   - Sua idade.
   - Uma mensagem que combine essas informações, como: "Meu nome é João e tenho 30 anos."
