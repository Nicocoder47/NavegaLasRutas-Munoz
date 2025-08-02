import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(prev => prev + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  const agregarAlCarrito = () => {
    if (onAdd && typeof onAdd === 'function') {
      onAdd(count);
    }
  };

  return (
    <div className="item-count-container">
      <div className="counter-controls">
        <button onClick={decrementar} className="btn-count">−</button>
        <span className="count-display">{count}</span>
        <button onClick={incrementar} className="btn-count">+</button>
      </div>

      <button onClick={agregarAlCarrito} className="btn-add-to-cart" disabled={stock === 0}>
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
}

export default ItemCount;
