import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  DialogContent,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from 'store/pomodoroSlice';

const CreateTodoDialog = ({ open, onClose, action = 'add' }) => {
  const dispatch = useDispatch();
  const submit = () => {
    if (action === 'add') {
      dispatch(addTodo(todo));
    } else {
      dispatch(editTodo(todo));
    }
  };
  const [todo, setTodo] = useState({
    todoTitle: '',
    todoDescription: '',
  });
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Todo Dialog</DialogTitle>
      <DialogContent style={{ width: '30rem' }}>
        <TextField
          label='New TODO'
          onChange={(e) => setTodo({ ...todo, todoTitle: e.target.value })}
          value={todo.todoTitle}
          variant='outlined'
          fullWidth
        />
        <TextField
          multiline
          rows={10}
          onChange={(e) =>
            setTodo({ ...todo, todoDescription: e.target.value })
          }
          value={todo.todoDescription}
          label='Description'
          variant='outlined'
          fullWidth
        />
        <DialogActions>
          <Button onClick={() => submit()} color='primary' variant='outlined'>
            ADD
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTodoDialog;
