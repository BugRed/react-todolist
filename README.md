# 📝 To-Do List

Este projeto é uma aplicação simples de lista de tarefas (To-Do List) desenvolvida em **React + TypeScript**. O objetivo é permitir que o usuário adicione, conclua e remova tarefas, mantendo um controle sobre quantas tarefas foram criadas e quantas foram concluídas.

---

## 🚀 Funcionalidades

✅ Adicionar uma nova tarefa à lista  
✅ Marcar uma tarefa como **concluída**  
✅ Remover uma tarefa  
✅ Contabilizar o número total de tarefas criadas  
✅ Contabilizar o número de tarefas concluídas  
✅ Usa localStorage para persistencia de dados

---

## 🛠️ Tecnologias Utilizadas

- **React.js** ⚛️
- **TypeScript** 🟦
- **CSS Modules** 🎨
- **Phosphor Icons** 🔥

---

## 📦 Instalação e Execução

### 1️⃣ Clone o repositório:
```bash
git clone git@github.com:BugRed/react-todolist.git
cd react-todolist
```

### 2️⃣ Instale as dependências:
```bash
npm install
# ou
yarn install
```

### 3️⃣ Execute o projeto:
```bash
npm run dev
# ou
yarn dev
```

Agora, acesse o projeto no navegador em: **http://localhost:5173/** (ou a porta que o Vite indicar).  

---

## 📂 Estrutura do Projeto

```
📁 src
 ├── 📁 assets         # Imagens e ícones
 ├── 📁 components     # Componentes do projeto
 │   ├── 📄 Input.tsx  # Componente de entrada de tarefas
 │   ├── 📄 Task.tsx   # Componente de cada tarefa individual
 │   ├── 📄 ToDoList.tsx # Componente principal
 ├── 📁 styles         # Estilos (CSS Modules)
 ├── 📄 App.tsx        # Componente principal do React
 ├── 📄 main.tsx       # Ponto de entrada do React
 ├── 📄 index.html     # HTML principal
```

---

## ✨ Como Usar
1️⃣ Digite o nome da tarefa no campo de entrada e clique em "Criar +".  
2️⃣ Para marcar uma tarefa como concluída, clique na caixa de seleção (checkbox).  
3️⃣ Para excluir uma tarefa, clique no ícone de **lixeira**.  
4️⃣ O contador de tarefas será atualizado automaticamente.

---

## 📌 Melhorias Futuras
🔹 Adicionar **filtros** (Todas, Concluídas, Pendentes)  
🔹 Permitir **edição** de tarefas  
🔹 Melhorar o **design** e responsividade 📱

---

## 👨‍💻 Autor
Desenvolvido por **[BugRed](https://github.com/BugRed)** 🚀

