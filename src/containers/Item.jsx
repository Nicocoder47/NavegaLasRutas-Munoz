import { Link } from 'react-router-dom';

function Item({ prod }) {
  return (
    <div className="producto-card">
      <img src={prod.imagen} alt={prod.nombre} />
      <h3>{prod.nombre}</h3>
      <p>${prod.precio}</p>
      <p>{prod.descripcion}</p>
      <Link to={`/producto/${prod.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;
