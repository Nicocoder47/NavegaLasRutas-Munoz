import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { getProductoPorId } from '../data/products';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    getProductoPorId(id)
      .then((res) => setProducto(res))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAgregar = (cantidad) => {
    if (producto && cantidad > 0) {
      agregarAlCarrito(producto, cantidad);
    }
  };

  if (loading) {
    return <div className="detail-loading">Cargando detalle del producto...</div>;
  }

  if (!producto) {
    return <div className="detail-error">Producto no encontrado.</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="item-detail-info">
        <h2>{producto.nombre}</h2>
        <p className="price">${producto.precio.toLocaleString()}</p>
        <p className="description">{producto.descripcion}</p>
        <ItemCount stock={producto.stock} initial={1} onAdd={handleAgregar} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
