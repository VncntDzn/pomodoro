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
import { getPomodoroTimes } from 'store/pomodoroSlice';

const CustomTimerDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [pomodoroTime, setPomodoroTime] = useState({
    pomodoro: '',
    shortBreak: '',
    longBreak: '',
  });
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Custom Timer</DialogTitle>
      <DialogContent style={{ width: '30rem' }}>
        <TextField
          label='Pomodoro'
          onChange={(e) =>
            setPomodoroTime({ ...pomodoroTime, pomodoro: e.target.value })
          }
          value={pomodoroTime.pomodoro}
          variant='outlined'
          fullWidth
        />
        <TextField
          onChange={(e) =>
            setPomodoroTime({ ...pomodoroTime, shortBreak: e.target.value })
          }
          value={pomodoroTime.shortBreak}
          label='Short Break'
          variant='outlined'
          fullWidth
        />
        <TextField
          onChange={(e) =>
            setPomodoroTime({ ...pomodoroTime, longBreak: e.target.value })
          }
          value={pomodoroTime.longBreak}
          label='Long Break'
          variant='outlined'
          fullWidth
        />
        <DialogActions>
          <Button
            onClick={() => dispatch(getPomodoroTimes(pomodoroTime))}
            color='primary'
            variant='outlined'
          >
            SAVE
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CustomTimerDialog;
