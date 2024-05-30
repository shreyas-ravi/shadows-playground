import { createContext } from 'react';

interface NameContextType {
  selectedName: string;
  setSelectedName: (name: string) => void;
}

export const NameContext = createContext<NameContextType | undefined>(undefined);
