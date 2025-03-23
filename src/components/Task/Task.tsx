import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  id: number;
  content: string;
  isCompleted: boolean;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export function Task({ id, content, isCompleted, onDeleteTask, onToggleComplete }: TaskProps) {
  return (
    <li className={styles.taskItem}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggleComplete(id)} // Alterna o status da tarefa
      />
      <label className={styles.content}>
        <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
          {content}
        </span>
        <button onClick={() => onDeleteTask(id)} className={styles.trashButton}>
          <Trash className={styles.trashIcon} />
        </button>
      </label>
    </li>
  );
}
