import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  addLoadingItem: (id: string) => void;
  removeLoadingItem: (id: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const addLoadingItem = (id: string) => {
    setLoadingItems(prev => new Set(prev).add(id));
  };

  const removeLoadingItem = (id: string) => {
    setLoadingItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  useEffect(() => {
    setIsLoading(loadingItems.size > 0);
  }, [loadingItems]);

  return (
    <LoadingContext.Provider value={{
      isLoading,
      setIsLoading,
      addLoadingItem,
      removeLoadingItem
    }}>
      {children}
    </LoadingContext.Provider>
  );
};
