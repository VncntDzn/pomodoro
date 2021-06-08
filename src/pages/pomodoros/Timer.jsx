import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import Lottie from 'react-lottie';
import WaveLoader from 'lottie/WaveLoader';
import CustomTimerDialog from './CustomTimerDialog';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  timeContainer: {
    position: 'absolute',
    top: '35vh',
    right: '30vw',
    left: '32vw',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '2.7rem',
  },
}));
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: WaveLoader,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Timer = (props) => {
  const styles = useStyles();
  const pomodoroTime = useSelector((state) => state.pomodoroTime);
  const shortBreakTime = useSelector((state) => state.shortBreakTime);
  const longBreakTime = useSelector((state) => state.longBreakTime);
  const [openDialog, setDialog] = useState(false);
  const [time, setTime] = useState({
    m: 25,
    s: 0,
  });

  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    let myInterval = setInterval(() => {
      setTime((time) => {
        const updatedTime = { ...time };
        if (time.s > 0) {
          updatedTime.s--;
        }

        if (time.s === 0) {
          if (time.m > 0) {
            updatedTime.m--;
            updatedTime.s = 59;
          }
        }

        return updatedTime;
      });
    }, 1000);
    setTimer(myInterval);
  };

  const askNotificationPermission = () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
    } else {
      Notification.requestPermission();
    }
  };
  const showNotification = (param) => {
    new Notification(param);
  };
  const pomodoro = () => {
    setTime({ m: pomodoroTime, s: 0 });
    clearInterval(timer);
    startTimer();
    if (pomodoroTime > 0) {
      showNotification('Hey! You started pomodoro!');
    } else {
      showNotification(`Hey! You're finished at pomodoro!`);
    }
  };
  const shortBreak = () => {
    setTime({ m: shortBreakTime, s: 0 });
    clearInterval(timer);
    startTimer();
    if (shortBreakTime > 0) {
      showNotification('Hey! You started short break!');
    } else {
      showNotification(`Hey! You're finished in short break!`);
    }
  };
  const longBreak = () => {
    setTime({ m: longBreakTime, s: 0 });
    clearInterval(timer);
    startTimer();
    if (longBreakTime > 0) {
      showNotification('Hey! You started long break!');
    } else {
      showNotification(`Hey! You're finished in long break!`);
    }
  };
  const pauseTimer = () => {
    clearInterval(timer);
  };

  const cancelTimer = () => {
    clearInterval(timer);
    setTime({
      m: 25,
      s: 0,
    });
  };

  useEffect(() => {
    document.title = `Remaining time: ${time.m}:${time.s}`;
    askNotificationPermission();
  }, [time.m, time.s]);
  return (
    <Box>
      <Box display='flex' alignItems='center'>
        <IconButton onClick={() => setDialog(!openDialog)}>
          <SettingsIcon />
        </IconButton>
        <Typography>POMODORO</Typography>
      </Box>

      <Grid>
        <Button onClick={() => pomodoro()} variant='outlined'>
          POMODORO
        </Button>
        <Button onClick={() => shortBreak()} variant='outlined'>
          SHORT BREAK
        </Button>
        <Button onClick={() => longBreak()} variant='outlined'>
          LONG BREAK
        </Button>
      </Grid>

      <Box
        position='relative'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Typography className={styles.timeContainer}>
          {time.m < 10 ? `0${time.m}` : time.m}:
          {time.s < 10 ? `0${time.s}` : time.s}
        </Typography>
        <Lottie options={defaultOptions} height='45%' width='45%' />
        <Box display='flex'>
          <Button
            color='primary'
            variant='outlined'
            onClick={() => pauseTimer()}
            endIcon={<PauseIcon />}
          >
            Pause
          </Button>
          &nbsp;
          <Button
            color='secondary'
            variant='outlined'
            onClick={() => cancelTimer()}
            endIcon={<StopIcon />}
          >
            Stop
          </Button>
        </Box>
      </Box>
      <CustomTimerDialog
        open={openDialog}
        onClose={() => setDialog(!openDialog)}
      />
    </Box>
  );
};

export default Timer;
