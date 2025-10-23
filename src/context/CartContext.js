'use client';

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // empieza vacío

  const addToCart = (producto, cantidad = 1) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === producto.id);
      if (exists) {
        return prev.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p);
      } else {
        return [...prev, { ...producto, cantidad }];
      }
    });
  };

  const updateCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setCart(prev => prev.map(p => p.id === id ? { ...p, cantidad: nuevaCantidad } : p));
  };

  const eliminarProducto = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrecio = cart.reduce((s, p) => s + p.precio * p.cantidad, 0);
  const totalProductos = cart.reduce((s, p) => s + p.cantidad, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateCantidad,
      eliminarProducto,
      clearCart,
      totalPrecio,
      totalProductos
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
