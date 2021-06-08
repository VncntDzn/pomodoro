import { useState, useEffect } from 'react';

import { Grid, Typography, Box, IconButton } from '@material-ui/core';
import CreateTodoDialog from './CreateTodoDialog';
import { useSelector, useDispatch } from 'react-redux';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTodo, getTodos } from 'store/pomodoroSlice';

const TodoList = (props) => {
  const dispatch = useDispatch();
  const [openDialog, setDialog] = useState(false);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <Grid>
      {todos && (
        <Box>
          {todos.map((data, i) => (
            <Box display='flex' alignItems='center' key={i}>
              <Typography variant='subtitle1'>{data.todoTitle}</Typography>
              <IconButton onClick={() => setDialog(!openDialog)}>
                <CreateIcon />
              </IconButton>
              <IconButton onClick={() => dispatch(deleteTodo(i))}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      <CreateTodoDialog
        open={openDialog}
        onClose={() => setDialog(!openDialog)}
        action='edit'
      />
    </Grid>
  );
};

TodoList.propTypes = {};

export default TodoList;
