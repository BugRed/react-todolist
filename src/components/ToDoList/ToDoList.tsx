import { Input } from "../Input/Input";
import { Task } from "../Task/Task";
import styles from "./ToDoList.module.css";

import clipboard from "../../assets/Clipboard.svg";
import { useState, useEffect } from "react";

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function ToDoList() {
  // Carregar tarefas do localStorage, se existirem
  const loadTasksFromStorage = () => {
    const storedTasks = localStorage.getItem("taskList");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [taskList, setTaskList] = useState<Task[]>([]);

  // Carregar as tarefas do localStorage assim que o componente for montado
  useEffect(() => {
    const tasksFromStorage = loadTasksFromStorage();
    setTaskList(tasksFromStorage);
  }, []);

  const [createdTask, setCreatedTask] = useState<number>(0);
  const [completedTask, setCompletedTask] = useState<number>(0);

  // Atualiza os contadores de tarefas criadas/concluídas
  useEffect(() => {
    setCreatedTask(taskList.length);
    setCompletedTask(taskList.filter((task) => task.isCompleted).length);
  }, [taskList]); // Quando taskList mudar, atualiza os contadores

  // Salva a lista de tarefas no localStorage
  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]); // Sempre que taskList mudar, salva no localStorage

  // Remove uma tarefa e atualiza a contagem corretamente
  function deleteTask(taskToDelete: number) {
    const updatedTaskList = taskList.filter((t) => t.id !== taskToDelete);
    setTaskList(updatedTaskList);

    // Após a remoção da tarefa, também atualiza o localStorage
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  }

  // Adiciona uma nova tarefa
  function createTask(content: string) {
    const newTask: Task = {
      id: Date.now(),
      content: content,
      isCompleted: false, // Inicialmente não concluída
    };
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  }

  // Alterna o status de uma tarefa concluída
  function toggleTaskCompletion(taskId: number) {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(updatedTaskList);
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
