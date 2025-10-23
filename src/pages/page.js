'use client';
import { useEffect, useState } from 'react';
import CartHeader from '../components/CartHeader';
import ProductTable from '../components/ProductTable';
import CartSummary from '../components/CartSummary';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { cart, updateCantidad, eliminarProducto, totalPrecio, totalProductos } = useCart();

  // Si quieres mostrar un mensaje cuando el carrito esté vacío:
  if (!cart || cart.length === 0) {
    return (
      <div className="min-vh-100" style={{backgroundColor: '#e4e2e2', fontFamily: 'var(--font-inter)'}}>
        <div className="container py-5">
          <h1 className="text-center mb-5" style={{fontSize: '2.25rem', fontWeight: '700', color: '#0f172a'}}>
            Carrito Interactivo de Compras con Next.js 🤯
          </h1>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="card border-0" style={{boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', borderRadius: '12px'}}>
                <CartHeader totalProductos={totalProductos} />
                <div className="card-body p-5 text-center">
                  <p className="mb-4">Tu carrito está vacío.</p>
                  <a href="/products" className="btn btn-primary">Ir al catálogo</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100" style={{backgroundColor: '#e4e2e2', fontFamily: 'var(--font-inter)'}}>
      <div className="container py-5">
        <h1 className="text-center mb-5" style={{fontSize: '2.25rem', fontWeight: '700', color: '#0f172a'}}>
         Carrito Interactivo de Compras con Next.js 🤯
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="card border-0" style={{boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', borderRadius: '12px'}}>
              <CartHeader totalProductos={totalProductos} />
              <ProductTable 
                productos={cart}
                actualizarCantidad={updateCantidad}
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
