import styles from "./Input.module.css";
import { useState } from "react";

interface InputProps {
  onCreateTask: (content: string) => void;
}

export function Input({ onCreateTask }: InputProps) {
  const [taskContent, setTaskContent] = useState<string>("");

  // Atualiza o estado conforme o usuário digita
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskContent(e.target.value);
  };

  // Cria uma nova tarefa e limpa o campo de entrada
  const handleCreateTask = () => {
    if (taskContent.trim()) {
      onCreateTask(taskContent);
      setTaskContent(""); // Limpa o campo de entrada
    }
  };

  return (
    <div className={styles.textarea}>
      <textarea
        className={styles.input}
        value={taskContent}
        onChange={handleInputChange}
        placeholder="Adicionar uma nova tarefa"
      />
      <button className={styles.createButton} onClick={handleCreateTask}>
        Criar +
      </button>
    </div>
  );
}
