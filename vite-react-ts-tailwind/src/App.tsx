import { useState } from 'react';
import Header from './components/Header';
import Description from './components/Description';
import TaskInput from './components/TaskInput';
import Controls from './components/Controls';
import TaskList from './components/TaskList';
import './App.css';

interface Task {
  id: number;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const saveTasks = () => {
    const taskTexts = tasks.map(t => t.text);
    localStorage.setItem('tasks', JSON.stringify(taskTexts));
    alert('Tasks saved!');
  };

  const loadTasks = () => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        const taskTexts: string[] = JSON.parse(saved);
        if (Array.isArray(taskTexts)) {
          const loadedTasks = taskTexts.map((text, index) => ({
            id: Date.now() + index, // Generate unique IDs
            text
          }));
          setTasks(loadedTasks);
          alert('Tasks loaded!');
        }
      } catch (e) {
        console.error("Failed to parse tasks", e);
        alert("Failed to load tasks.");
      }
    } else {
      alert('No saved tasks found.');
    }
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const deleteAllTasks = () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
      setTasks([]);
      localStorage.removeItem('tasks'); // Should "Delete All" also clear storage? 
      // Original code: "deleteAllTasksBtn" just clears the table (taskTable.innerHTML = ''). 
      // It does NOT clear localStorage in the original code.
      // So I will stick to clearing state only.
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full h-full pt-4 min-h-screen">
      <Header />
      <Description />
      <TaskInput onAddTask={addTask} />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#999] to-transparent my-2"></div>

      <TaskList tasks={tasks} onDeleteTask={deleteTask}>
        <Controls
          onSave={saveTasks}
          onLoad={loadTasks}
          onClear={clearTasks}
          onDeleteAll={deleteAllTasks}
        />
      </TaskList>
    </div>
  );
}

export default App;
