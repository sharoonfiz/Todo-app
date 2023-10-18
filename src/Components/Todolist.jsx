import Todo from "./Todo"


function Todolist({ task, setTask, filteredTodo, setEdittask }) {
    console.log("filtered", filteredTodo);
    return (
        <div className="todo-container" >

            <ul className="todo-list" >

                {filteredTodo?.map((item) => (
                    (
                        <Todo key={item.id} item={item} task={task} setTask={setTask} setEdittask={setEdittask} />
                    )
                ))}

            </ul>

        </div>
    )
}

export default Todolist