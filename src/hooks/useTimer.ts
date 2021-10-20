import { useEffect, useState } from 'react';

export type TUseTimer = {
  formattedTime: string;
  handleControllerClick: () => void;
  controllerLabel: string;
  totalTime: number;
  time: number;
};

const useTimer = (timeValue: number): TUseTimer => {
  const totalTime = timeValue * 60;
  const [time, setTime] = useState(totalTime);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!pause && start && time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const convertTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleControllerClick = () => {
    if (!start) {
      setStart(true);
    } else if (time === 0 && start) {
      setTime(totalTime);
      setStart(false);
    } else {
      setPause((prev) => !prev);
    }
  };

  const setControllerLabel = () => {
    let label: string;

    if (!start) {
      label = 'START';
    } else if (start && time === 0) {
      label = 'RESTART';
    } else if (pause) {
      label = 'RESUME';
    } else {
      label = 'PAUSE';
    }

    return label;
  };

  return {
    formattedTime: convertTime(),
    handleControllerClick,
    controllerLabel: setControllerLabel(),
    totalTime,
    time,
  };
};

export default useTimer;
