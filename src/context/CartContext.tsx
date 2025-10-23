"use client";
import { createContext, useState, ReactNode } from "react";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}

interface CartContextType {
  carrito: Producto[];
  agregarProducto: (producto: Producto) => void;
  eliminarProducto: (id: number) => void;
  actualizarCantidad: (id: number, cantidad: number) => void;
  total: number;
  totalProductos: number;
}

export const CartContext = createContext<CartContextType>({
  carrito: [],
  agregarProducto: () => {},
  eliminarProducto: () => {},
  actualizarCantidad: () => {},
  total: 0,
  totalProductos: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarProducto = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const actualizarCantidad = (id: number, cantidad: number) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: Math.max(1, cantidad) } : p
      )
    );
  };

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const totalProductos = carrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        actualizarCantidad,
        total,
        totalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
