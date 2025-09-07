/**
 * Componente que recibe un producto y sus funciones para actualizar la cantidad y eliminar el producto.
 * @param {Object} producto - El producto a mostrar.
 * @param {function} actualizarCantidad - Función para actualizar la cantidad del producto.
 * @param {function} eliminarProducto - Función para eliminar el producto.
 */
export default function ProductRow({ producto, actualizarCantidad, eliminarProducto }) {
  return (
    <tr style={{borderBottom: '1px solid #e2e8f0'}}>
      <td className="py-2 px-4">
        <div className="d-flex align-items-center">
          <div className="rounded me-3" style={{width: '32px', height: '32px', backgroundColor: '#e2e8f0'}}></div>
          <span style={{fontWeight: '500', color: '#0f172a', fontSize: '0.875rem'}}>{producto.nombre}</span>
          <button 
            className="btn p-0 ms-2 border-0 bg-transparent"
            onClick={() => eliminarProducto(producto.id)}
            style={{fontSize: '14px', color: '#ef4444', opacity: '0.7', transition: 'opacity 0.2s'}}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.7'}
          >
            <i className="bi bi-trash3 px-3"></i>
          </button>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <span style={{fontWeight: '500', color: '#0f172a', fontSize: '0.875rem'}}>${producto.precio}</span>
      </td>
      <td className="py-2 px-4">
        <div className="d-flex align-items-center justify-content-center">
          <button 
            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center border-0"
            style={{width: '28px', height: '28px', backgroundColor: '#f1f5f9', color: '#475569', fontWeight: '500', fontSize: '0.75rem'}}
            onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
          >
            −
          </button>
          <span className="mx-2" style={{fontWeight: '500', color: '#0f172a', minWidth: '20px', textAlign: 'center', fontSize: '0.875rem'}}>{producto.cantidad}</span>
          <button 
            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center border-0"
            style={{width: '28px', height: '28px', backgroundColor: '#3b82f6', color: 'white', fontWeight: '500', fontSize: '0.75rem'}}
            onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <span style={{fontWeight: '500', color: '#0f172a', fontSize: '0.875rem'}}>${producto.precio * producto.cantidad}</span>
      </td>
    </tr>
  );
}