# 💬 Seção de Comentários em React + Vite

Uma aplicação web interativa desenvolvida em React para gestão e exibição de comentários em tempo real. O projeto foi construído do zero focando em boas práticas de manipulação de estados, imutabilidade, eventos de formulário e renderização condicional.

---
## 🚀 Tecnologias Utilizadas

- **React** (Biblioteca principal)
- **Vite** (Build tool e servidor de desenvolvimento)
- **JavaScript (ES6+)** (Lógica e manipulação de arrays)
- **CSS3 / Flexbox** (Estilização responsiva e animações de transição)
- **Google Fonts (Poppins)** (Tipografia moderna)

---
## 📌 Funcionalidades

- 📝 **Envio de Comentários:** Formulário para inserção de e-mail e texto do comentário.
- ⏱️ **Organização Cronológica:** Comentários mais recentes são exibidos automaticamente no topo da lista.
- 🕒 **Carimbo de Data/Hora:** Registra o momento exato em que o comentário foi enviado.
- 🎨 **Interface Animada:** Efeitos visuais de hover, foco nos inputs e animação de surgimento (*keyframes*) para novos comentários.
- 🔍 **Renderização Condicional:** Exibição de mensagem amigável ("Seja o primeiro a comentar!") quando a lista está vazia.

---
## 💡 Aprendizados e Conceitos Aplicados

Neste projeto foram colocados em prática:

1. **Gestão de Estados (`useState`):**
   - Controle dos campos de entrada (`email` e `comentario`).
   - Estado em formato de array de objetos para armazenamento da lista completa de comentários.

2. **Manipulação do Evento de Envio (`onSubmit`):**
   - Utilização de `e.preventDefault()` para controlar o fluxo da aplicação sem recarregar a página.

3. **Imutabilidade e Operator Spread (`...`):**
   - Atualização do array de comentários inserindo o novo objeto sempre no início (`[novoComentario, ...lista]`).

4. **Iteração de Arrays (`.map()`):**
   - Mapeamento do array para renderização dinâmica de elementos HTML utilizando chave única (`key={item.id}`).

---
## 🛠️ Como Executar o Projeto Localmente

1. **Clone o repositório:**
   git clone (https://github.com/mellvaz/formulario_react.git)

2. **Acesse a pasta do projeto:**
   cd nome-da-pasta

3. **Instale as dependências:**
   npm install
   
4. **Inicie o servidor de desenvolvimento:**
   npm run dev
   
5. **Abra o navegador no endereço indicado pelo terminal (geralmente http://localhost:5173).**

Feito com 💜 durante os estudos de React!
