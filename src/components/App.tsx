import React from 'react';
import { connect } from 'react-redux';
import { Todo, deleteTodo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export const _App: React.FC = (props: AppProps) => {
  const onButtonClick = (): void => {
    props.fetchTodos();
  };

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
