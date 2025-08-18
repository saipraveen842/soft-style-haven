import React, { createContext, useContext } from 'react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

interface AppContextType {
  cart: ReturnType<typeof useCart>;
  wishlist: ReturnType<typeof useWishlist>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cart = useCart();
  const wishlist = useWishlist();

  return (
    <AppContext.Provider value={{ cart, wishlist }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};