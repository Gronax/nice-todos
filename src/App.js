import React from 'react'
import Filter from './components/Filter'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { Container, Paper, Typography, Divider } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: "#795DCC",
        main: '#5D3EBC',
        dark: "#431FB0",
        contrastText: "#FFD10D"
      },
      secondary: {
        light: "#FFE269",
        main: '#FFD10D',
        dark: "#FFDA40",
        contrastText: "#5D3EBC"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Paper elevation={1} style={{ marginTop: 16 }}>
          <Typography variant="h4" style={{ padding: 16 }}>Nice Todo's</Typography>
          <Divider />
          <AddTodo />
          <Divider />
          <Filter />
          <Divider />
          <VisibleTodoList />
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default App
