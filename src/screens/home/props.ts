export interface Todo {
    id: number;
    title: string;
    body: string;
    completed: boolean;
}

export interface HomeProps {
    initialLoad: boolean;
    hasUsedAppBefore: boolean;
    userUpdate: (...params) => void;
    userId: string;
    getTodosRequest: (...params) => Promise<Todo[]>;
    todosUpdate: (todoArray: { todoArray: ({ id: number; title: string; body: string } | { id: number })[] }) => void;
    todos: Todo[];
    addTodoRequest: (todo: { title: string; body: string; userId: string; completed: boolean }) => Promise<Todo>;
    deleteTodoRequest: (...params) => Promise<void>;
    patchTodoRequest: (patchData: { id: number; complete: boolean }) => Promise<Todo>;
    updateTodoRequest: (updateData: { id: number; title: string; body: string }) => Promise<Todo>;
}
