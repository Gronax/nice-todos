import shortid from 'shortid'

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: shortid.generate(),
  text
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
