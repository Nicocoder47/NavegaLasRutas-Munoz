import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    setCart(prevCart => {
      const itemExistente = prevCart.find(item => item.id === producto.id);
      if (itemExistente) {
        return prevCart.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prevCart, { ...producto, cantidad }];
      }
    });
  };

  const vaciarCarrito = () => setCart([]);

  const eliminarItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, vaciarCarrito, eliminarItem }}>
      {children}
    </CartContext.Provider>
  );
};
