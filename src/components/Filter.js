import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Filters } from '../actions'
import { ButtonGroup } from '@material-ui/core'
import { connect } from 'react-redux'

const Filter = (props) => {
  const { itemsLeft } = props

  return (
    <div style={{ margin: '1rem 0', padding: '0 1rem', display: 'flex', alignItems: 'center'}}>
      <span style={{ marginRight: '.8rem'}}>Filter: </span>
      <ButtonGroup color="primary" size="small" aria-label="Filter Group" style={{ marginRight: 'auto' }}>
        <FilterLink filter={Filters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={Filters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={Filters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </ButtonGroup>
      {itemsLeft > 0 && <small>{itemsLeft} items left</small>}
    </div>
  )
}

const mapStateToProps = ({ todos }) => ({
  itemsLeft: todos.filter(t => !t.completed).length
})

export default connect(mapStateToProps, null)(Filter)
