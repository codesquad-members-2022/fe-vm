import { createContext, useState } from 'react';

export const ProgressContext = createContext(false);

export function ProgressProvider({ children }) {
  const [inProgress, setInProgress] = useState(false);

  return <ProgressContext.Provider value={{ inProgress, setInProgress }}>{children}</ProgressContext.Provider>;
}
