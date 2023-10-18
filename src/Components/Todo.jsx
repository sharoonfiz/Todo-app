import { AiFillDelete } from "react-icons/ai"
import { TiTickOutline } from "react-icons/ti"
import { TbEdit } from "react-icons/tb"



const Todo = ({ item, task, setTask, setEdittask }) => {
    // console.log(editTask);
    const handleEdit = (id) => {
        const editedTask = task?.find((edit) => edit.id === id)
        setEdittask(editedTask)

    }

    const handleDelete = (id) => {
        setTask(task?.filter((list) => list.id !== id))
    }


    const handleComplete = (id) => {
        setTask(task?.map((list) => list.id === id ? { ...list, completed: !list.completed } : list))
    }


    return (

        <div className="todo" >


            <div className="todo" key={item.id} >

                <li key={item.id} className={`todo-li ${item.completed ? "completed" : ''} `} value={item.title}  > {item.title}   </li>

                <button className="edit-btn" onClick={() => handleEdit(item.id)} >
                    <TbEdit></TbEdit>
                </button>

                <button className="tick-btn" onClick={() => handleComplete(item.id)}  >
                    <TiTickOutline></TiTickOutline>
                </button>

                <button className="delete-btn" onClick={() => handleDelete(item.id)} >
                    <AiFillDelete></AiFillDelete>
                </button>

            </div>

        </div>
    )
}

export default Todo


