import React, { useEffect, useMemo, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Alert, FlatList, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddTodoModal from '../../components/addTodoModal';
import { ContainerActions, NetworkActions, PersistedActions } from '../../redux';
import { ListItem, SearchInput, UserIdModal } from '../../components';
import { HomeProps } from './props';

const Home: React.FC<HomeProps> = ({ hasUsedAppBefore, userUpdate, userId, getTodosRequest, todosUpdate, todos, addTodoRequest, deleteTodoRequest, patchTodoRequest, updateTodoRequest}) => {
    const [state, setState] = useState({
        isModalVisible: !hasUsedAppBefore,
        isVisibleAddTodoModal: false,
        isVisibleEditingModal: false,
        selectedTodo: null,
        searchTerm: '',
    });

    useEffect(() => {
        getTodos()
    })

    const getTodos = async () => {
        try {
            const response = await getTodosRequest({
                userId,
            });
            todosUpdate({
                todoArray: response,
            });
        } catch (e) {}
    };

    const deleteTodo = async (id: number) => {
        try {
            const response = await deleteTodoRequest({
                id,
            });
            onDeleteTodoSuccess(id);
        } catch (e) {}
    };

    const onDeleteTodoSuccess = (id: number) => {
        const clonedTodos = Array.from(todos);

        const todoIndex = clonedTodos.findIndex(todo => todo.id === id);

        clonedTodos.splice(todoIndex, 1);

        todosUpdate({
            todoArray: clonedTodos,
        });
    };

    const addTodo = async ({ title, body }: { title: string; body: string }) => {
        try {
            const response = await addTodoRequest({
                title,
                body,
                userId,
                completed: false,
            });

            const updatedTodos = [...todos, response];

            todosUpdate({
                todoArray: updatedTodos,
            });
        } catch (e) {}
    };

    const patchTaskCompletion = async (id: number, complete: boolean) => {
        try {
            const response = await patchTodoRequest({
                id,
                complete: !complete,
            });
            console.log(response);
            patchTaskCompletionSuccess(id, complete);
        } catch (e) {}
    };

    const patchTaskCompletionSuccess = (id: number, complete: boolean) => {
        const updatedTodos = todos.map((todo: { id: number }) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !complete,
                };
            }
            return todo;
        });

        todosUpdate({
            todoArray: updatedTodos,
        });

        Alert.alert('Task Successfully updated', '', [{ text: 'Okay' }]);
    };

    const updateTodo = async (id: number, title: string, body: string) => {
        try {
            const response = await updateTodoRequest({
                id,
                title,
                body,
            });
            console.log(response);
            updateTodoSuccess({ id, title, body });
        } catch (e) {}
    };

    const updateTodoSuccess = ({ id, title, body }: { id: number; title: string; body: string }) => {
        const updatedTodos = todos.map((todo: { id: number }) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title,
                    body,
                };
            }
            return todo;
        });

        todosUpdate({
            todoArray: updatedTodos,
        });

        Alert.alert('Task Successfully updated', '', [{ text: 'Okay' }]);
    };

    const filteredTasks = useMemo(() => {
        const { searchTerm } = state;

        if (searchTerm) {
            return todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        return null;
    }, [state?.searchTerm]);

    return [
        state.isModalVisible && (
            <UserIdModal
                key={1}
                userUpdate={userUpdate}
                isModalVisible={state.isModalVisible}
                formInitialValues={{ userId: '' }}
                formName="userId"
                onPressProceed={() => {
                    setState({
                        ...state,
                        isModalVisible: false,
                    });
                }}
            />
        ),
        state.isVisibleAddTodoModal && (
            <AddTodoModal
                key={2}
                isModalVisible={state.isVisibleAddTodoModal}
                onPressAdd={async ({ title, body }: { title: string; body: string }) => {
                    await addTodo({ title, body });
                    setState({
                        ...state,
                        isVisibleAddTodoModal: false,
                    });
                }}
            />
        ),
        state.isVisibleEditingModal && (
            <AddTodoModal
                selectedTask={state.selectedTodo}
                key={4}
                isModalVisible={state.isVisibleEditingModal}
                isEditing={state.isVisibleEditingModal}
                onPressAdd={async ({ title, body }: { title: string; body: string }) => {
                    await updateTodo(state?.selectedTodo.id, title, body);
                    setState({
                        ...state,
                        isVisibleEditingModal: false,
                        selectedTodo: null,
                    });
                }}
            />
        ),
        <Ionicons
            key={5}
            name="add-circle-outline"
            color="green"
            size={50}
            onPress={() =>
                setState({
                    ...state,
                    isVisibleAddTodoModal: true,
                })
            }
            style={{ position: 'absolute', zIndex: 1, bottom: 30, right: 10 }}
        />,
        <View style={{ backgroundColor: 'white', marginBottom: 48 }} key={3}>
            <SearchInput
                onChangeText={val =>
                    setState({
                        ...state,
                        searchTerm: val,
                    })
                }
            />
            <FlatList
                data={state?.searchTerm ? filteredTasks : todos}
                renderItem={({ item }) => {
                    return (
                        <ListItem
                            isComplete={item.completed}
                            title={item?.title}
                            body={item?.body}
                            onPressDelete={() =>
                                Alert.alert('Deleting Task', 'Are you sure you want to delete this task', [
                                    {
                                        text: 'Yes, im sure',
                                        onPress: () => deleteTodo(item.id),
                                    },
                                    {
                                        text: 'Cancel',
                                    },
                                ])
                            }
                            onPressComplete={() => patchTaskCompletion(item.id, item.completed)}
                            onPressEdit={async () => {
                                setState({
                                    ...state,
                                    selectedTodo: item,
                                    isVisibleEditingModal: true,
                                });
                            }}
                        />
                    );
                }}
            />
        </View>,
    ];
};

const getTodoArray = state => state.container.todoArray;

const mapStateToProps = state => ({
    userId: state.persisted.userId,
    hasUsedAppBefore: state.persisted.hasUsedAppBefore,
    initialLoad: state.persisted.initialLoad,
    todos: getTodoArray(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            updateTodoRequest: NetworkActions.updateTodoRequest,
            patchTodoRequest: NetworkActions.patchTodoRequest,
            deleteTodoRequest: NetworkActions.deleteTodoRequest,
            userUpdate: PersistedActions.userUpdate,
            getTodosRequest: NetworkActions.getTodosRequest,
            todosUpdate: ContainerActions.todosUpdate,
            addTodoRequest: NetworkActions.addTodoRequest,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
