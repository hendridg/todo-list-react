import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import AddInput from './components/AddInput/AddInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [data, setData] = useState({});
  useEffect(async () => {
    const response = await fetch('http://localhost:8000/todos');
    const json = await response.json();
    setData(json);
  }, []);
  return (
    <div className="App">
      <Header title="Todo" />
      <AddInput
        setTodos={setData}
        todos={data}
      />
      <TodoList
        todos={data}
        setTodos={setData}
      />
    </div>
  );
}

export default App;
