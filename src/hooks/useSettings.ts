import { TState } from 'context/AppContext';
import { useState } from 'react';

export type TSettings = {
  activeFont: string;
  activeColor: string;
  timers: {
    name: string;
    value: number;
  }[];
};

type TUseSettings = {
  settings: TSettings;
  handleColorClick: (color: string) => void;
  handleFontClick: (font: string) => void;
  handleIncrementValue: (name: string) => void;
  handleDecrementValue: (name: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useSettings = (initialState: TState): TUseSettings => {
  const [settings, setSettings] = useState({
    activeFont: initialState.activeFont,
    activeColor: initialState.activeColor,
    timers: initialState.timers,
  });

  const handleColorClick = (color: string) => {
    setSettings({ ...settings, activeColor: color });
  };

  const handleFontClick = (font: string) => {
    setSettings({
      ...settings,
      activeFont: font,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      timers: settings.timers.map((timer) => {
        if (timer.name === name)
          return { ...timer, value: Number(value) > 59 ? 59 : Number(value) };
        return timer;
      }),
    });
  };

  const handleIncrementValue = (name: string) => {
    setSettings({
      ...settings,
      timers: settings.timers.map((timer) => {
        if (timer.name === name) return { ...timer, value: timer.value + 1 };
        return timer;
      }),
    });
  };

  const handleDecrementValue = (name: string) => {
    setSettings({
      ...settings,
      timers: settings.timers.map((timer) => {
        if (timer.name === name) return { ...timer, value: timer.value - 1 };
        return timer;
      }),
    });
  };
  return {
    settings,
    handleColorClick,
    handleFontClick,
    handleIncrementValue,
    handleDecrementValue,
    handleInputChange,
  };
};

export default useSettings;
