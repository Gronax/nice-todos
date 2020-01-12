import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const Todo = ({ toggleEvent, deleteEvent, completed, text, labelId }) => (
  <ListItem
    dense
    button
    onClick={toggleEvent}
    style={{
      ...(completed && { textDecoration: 'line-through', color: 'gray' }),
    }}
  >
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={completed}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': labelId }}
      />
    </ListItemIcon>
    <ListItemText id={labelId} primary={text} />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={deleteEvent}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

Todo.propTypes = {
  toggleEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
