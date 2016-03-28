/*
 * global
 */
interface Iitem {
    id: number,
    text: string,
}


/*
 * TodoList
 */
interface ITodoListProps {
    items: Array<Iitem>,
}


/*
 * TodoApp
 */
interface ITodoAppState {
    items?: Array<Iitem>,
    text?: any,
}
