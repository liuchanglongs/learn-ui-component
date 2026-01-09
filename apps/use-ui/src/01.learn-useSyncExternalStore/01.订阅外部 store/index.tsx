import { useSyncExternalStore } from 'react'
import { todosStore } from './todoStore'
export default function TodosApp() {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)
    return (
        <>
            <button onClick={() => todosStore.addTodo()}>增加 todo</button>
            <hr />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    )
}
