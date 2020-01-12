import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Filters } from '../actions'
import { ButtonGroup } from '@material-ui/core'

const Filter = () => (
  <div style={{ margin: '1rem 0', padding: '0 1rem'}}>
    <span>Filter: </span>
    <ButtonGroup color="primary" size="small" aria-label="Filter Group">
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
  </div>
)

export default Filter
