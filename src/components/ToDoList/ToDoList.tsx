import { Input } from "../Input/Input";
import { Task } from "../Task/Task";
import styles from "./ToDoList.module.css";

import clipboard from "../../assets/Clipboard.svg";
import { useState } from "react";

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function ToDoList() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [createdTask, setCreatedTask] = useState<number>(0);
  const [completedTask, setCompletedTask] = useState<number>(0);

  // Atualiza os contadores de tarefas criadas/concluídas
  function updateCreatedAndCompletedTask(createdIncrement: number, completedIncrement: number) {
    setCreatedTask((prev) => prev + createdIncrement);
    setCompletedTask((prev) => prev + completedIncrement);
  }

  // Remove uma tarefa e atualiza a contagem corretamente
  function deleteTask(taskToDelete: number) {
    setTaskList((prevTasks) => prevTasks.filter((t) => t.id !== taskToDelete));

    setCreatedTask((prev) => Math.max(prev - 1, 0));

    // Se a tarefa removida estava concluída, reduzir a contagem de concluídas
    setCompletedTask((prev) => {
      const wasCompleted = taskList.find((task) => task.id === taskToDelete)?.isCompleted;
      return wasCompleted ? Math.max(prev - 1, 0) : prev;
    });
  }

  // Adiciona uma nova tarefa
  function createTask(content: string) {
    const newTask: Task = {
      id: Date.now(),
      content: content,
      isCompleted: false, // Inicialmente não concluída
    };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
    updateCreatedAndCompletedTask(1, 0);
  }

  // Alterna o status de uma tarefa concluída
  function toggleTaskCompletion(taskId: number) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );

    setCompletedTask((prev) => {
      const task = taskList.find((t) => t.id === taskId);
      return task && !task.isCompleted ? prev + 1 : Math.max(prev - 1, 0);
    });
  }

  return (
    <div className={styles.container}>
      <Input onCreateTask={createTask} />
      <div className={styles.links}>
        <div className={styles.linksTitle}>
          <span className={styles.linksCreateTask}>Tarefas Criadas </span>
          <p className={styles.linksTaskTitle}>{createdTask}</p>
        </div>
        <div className={styles.linksTitle}>
          <span className={styles.linksCompletedTask}> Concluídas</span>
          <p className={styles.linksTaskTitle}>{completedTask}</p>
        </div>
      </div>
      <ul>
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              isCompleted={task.isCompleted}
              onDeleteTask={deleteTask}
              onToggleComplete={toggleTaskCompletion} // Passa a função para alternar status
            />
          ))
        ) : (
          <div className={styles.divEmpty}>
            <img className={styles.imgEmpty} src={clipboard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </ul>
    </div>
  );
}
