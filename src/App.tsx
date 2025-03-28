import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { ToDoList } from './components/ToDoList/ToDoList'


function App() {
  
  return (
    <div className={styles.container}>
      <Header/>

      <ToDoList/>
    </div>
  )
}

export default App
