import ProductRow from './ProductRow';

export default function ProductTable({ productos, actualizarCantidad, eliminarProducto }) {
  return (
    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table mb-0">
          <thead style={{backgroundColor: '#f8fafc'}}>
            <tr>
              <th className="border-0 py-3 px-4" style={{fontWeight: '500', fontSize: '0.875rem', color: '#64748b'}}>Nombre del Producto</th>
              <th className="border-0 py-3 px-4 text-center" style={{fontWeight: '500', fontSize: '0.875rem', color: '#64748b'}}>Precio</th>
              <th className="border-0 py-3 px-4 text-center" style={{fontWeight: '500', fontSize: '0.875rem', color: '#64748b'}}>Cantidad</th>
              <th className="border-0 py-3 px-4 text-center" style={{fontWeight: '500', fontSize: '0.875rem', color: '#64748b'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <ProductRow 
                key={producto.id}
                producto={producto}
                actualizarCantidad={actualizarCantidad}
                eliminarProducto={eliminarProducto}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}