import { useState } from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import Timer from './pomodoros/Timer';
import TodoList from './todos/TodoList';
import CreateTodoDialog from './todos/CreateTodoDialog';

const LandingPage = () => {
  const [openDialog, setDialog] = useState(false);
  return (
    <Grid container spacing={2} item style={{ padding: '2rem' }}>
      <Grid
        item
        lg={3}
        style={{
          borderRight: '3px solid #26CD86',
          height: '100vh',
        }}
      >
        <Box display='flex' justifyContent='space-between' width={'20rem'}>
          <Typography variant='h1'>Todo-list</Typography>
          <Button onClick={() => setDialog(!openDialog)} variant='outlined'>
            New Todo
          </Button>
        </Box>
        <TodoList />

        <CreateTodoDialog
          open={openDialog}
          onClose={() => setDialog(!openDialog)}
        />
      </Grid>
      <Grid container item direction='column' lg={9}>
        <Timer />
      </Grid>
    </Grid>
  );
};
export default LandingPage;
