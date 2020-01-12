import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { List } from '@material-ui/core'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <List>
    {todos.map(todo => {
      const labelId = `todo-${todo.id}`

      return (
        <Todo
          key={todo.id}
          labelId={labelId}
          {...todo}
          toggleEvent={() => toggleTodo(todo.id)}
          deleteEvent={() => deleteTodo(todo.id)}
        />
      )}
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
