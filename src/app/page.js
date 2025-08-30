'use client';
import { useState } from 'react';
import productosData from '../data/productos.json';
import CartHeader from '../components/CartHeader';
import ProductTable from '../components/ProductTable';
import CartSummary from '../components/CartSummary';

export default function Home() {
  const [productos, setProductos] = useState(productosData);

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setProductos(productos.map(producto => 
      producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
    ));
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  const totalPrecio = productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  const totalProductos = productos.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <div className="min-vh-100" style={{backgroundColor: '#fafafa', fontFamily: 'var(--font-inter)'}}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="card border-0" style={{boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', borderRadius: '12px'}}>
              <CartHeader totalProductos={totalProductos} />
              <ProductTable 
                productos={productos}
                actualizarCantidad={actualizarCantidad}
                eliminarProducto={eliminarProducto}
              />
              <CartSummary 
                totalPrecio={totalPrecio}
                totalProductos={totalProductos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
