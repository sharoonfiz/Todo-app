import { useEffect, useRef } from "react";



function Form({ task, setTask, status, setStatus, setFilteredTodo, editTask, setEdittask }) {

    const inputEl = useRef()


    useEffect(() => {
        inputEl.current.focus();
    }, [editTask])


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
                const data = await response.json()
                // console.log("Apidata", data);
                setTask([...data])

            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData()
    }, [])



    // handleSubmit function

    const handleSubmit = (e) => {
        e.preventDefault()
        let taskTitle = inputEl.current.value;
        inputEl.current.focus();

        if (editTask.id) {

            let updatedTask = task.map((todo) => todo.id === editTask.id ? { id: editTask.id, title: taskTitle, completed: todo.completed } : todo)

            // console.log("edited", updatedTask);

            if (taskTitle === "") {
                alert('Plz edit the task You selected')
            }

            setTask(updatedTask)
            setEdittask({});

            inputEl.current.value = "";



        } else {

            if (taskTitle === "") {
                alert("Please Enter Some Todo Task");
                return;
            }

            const TaskList = {
                id: Math.floor(Math.random() * 10000023),
                title: taskTitle,
                completed: false,
            }

            setTask(prev => [...prev, TaskList])

            inputEl.current.value = "";

            setEdittask({})

        }

    }


    // useEffect for filteredTask with option value

    useEffect(() => {

        const filteredFunc = () => {

            switch (status) {
                case "completed":

                    return setFilteredTodo(task.filter((fil) => fil.completed === true))

                case "incompleted":

                    return setFilteredTodo(task.filter((fil) => fil.completed === false))

                default:
                    return setFilteredTodo(task)

            }
        };

        filteredFunc();

    }, [status, task]);




    return (
        <div className="form-wrap" >

            <h2 className='head-text' >Todo Application</h2>

            <form className='form' onSubmit={(e) => handleSubmit(e)}  >

                <input className='input' type="text" ref={inputEl} />

                <button className='todo-btn' type='submit' >

                    {editTask.id ? "UPDATE" : "ADD"}
                </button>



                <select className='select' name="todos" id={status} onChange={(e) => setStatus(e.target.value)}  >
                    <option value="all">All</option>
                    <option value="completed">Complete</option>
                    <option value="incompleted">InComplete</option>
                </select>

            </form>

        </div>
    )
}

export default Form