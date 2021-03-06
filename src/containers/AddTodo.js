import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { TextField, Button, Grid } from '@material-ui/core'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <form
      style={{ padding: 16 }}
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }
    }>
      <Grid container
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12} sm={9}>
          <TextField
            label="Add a Todo"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            inputRef={node => input = node}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="secondary" type="submit" fullWidth>
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default connect()(AddTodo)
