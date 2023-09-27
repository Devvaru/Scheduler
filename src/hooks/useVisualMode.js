import { useState } from 'react';

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setHistory(prev => [...prev, newMode]);
  }

  function back() {
    setHistory(prev => [...prev.slice(0, prev.length - 1)]);
  };

  return { mode: history[history.length - 1], transition, back };
}

// As seen here, the `useVisualMode` function can take an initial argument to set the mode state. We then return an object `{ mode }`, which can also be written as `{ mode: mode }`. This lets our tests (and components) access the current value of the mode from the hook.
