import { createStore, useStore } from './utils'

// 创建一个存储数字的 store，初始值为 0
export const counterStore = createStore(0 as any)

export default function TodosApp() {
    const count = useStore(counterStore)

    return (
        <>
            <button onClick={() => counterStore.setState((prev: number) => prev + 1)}>增加 todo</button>
            <hr />
            <ul>{count}</ul>
        </>
    )
}
