import {useState} from 'react';
import Todo from './todo';
import "./styleNotas.css";

export default function TodoApp(){
     
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(e){
        const value = e.target.value;
        setTitle(value);
    }
    function handleSubmit(e) {
        e.preventDefault()

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
         }
         //copio el array de tareas y le agrego la nueva tarea
          const temp = [...todos];
          //agregar las nueva tarea al array
          temp.unshift(newTodo);
            //actualizo el array de tareas con la nueva tarea
           setTodos(temp)
              //limpio el input
              setTitle("");
        }
        function handleUpdate(id, value){
            const temp = [...todos];
              const item = temp.find(item => item.id === id);
                item.title = value;
                setTodos(temp);
        }
        function handleDelete(id){
            const temp = todos.filter(item => item.id !== id);
            setTodos(temp);

        }

    return (
        <>
        <div className="container">
            <h1>Lista de Tareas</h1>
            </div>
    <div className="todoContainer">
        <from className="todoCreateForm" onSubmit={handleSubmit}>
            <input
             onChange={handleChange}
            className="todoInput" value={title}/>
            <input 
            onClick={handleSubmit} 
            type="submit" 
            value="Crear Tarea"
            className='buttonCreate'/>
            </from> 
    <div className='todosContainer'>
        { todos.map((item)=> (
           <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} /> 
        ))

        }
    </div>
    </div>
    </>
    );
}