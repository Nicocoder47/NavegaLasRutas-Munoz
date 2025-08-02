import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../data/products';
import ItemList from '../containers/ItemList';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = categoriaId
          ? await getProductosPorCategoria(categoriaId)
          : await getProductos();

        setProductos(data);
      } catch (err) {
        console.error(err);
        setError('Hubo un problema al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoriaId]);

  return (
    <section className="itemlist-container">
      <h1 className="itemlist-title">{greeting}</h1>

      {loading && (
        <div className="skeleton-grid">
          {Array(4).fill().map((_, i) => (
            <div key={i} className="skeleton-card">
              <Skeleton height={200} />
              <Skeleton height={24} style={{ marginTop: '1rem' }} />
              <Skeleton count={2} />
            </div>
          ))}
        </div>
      )}

      {error && <p className="error-msg">{error}</p>}

      {!loading && !error && (
        <ItemList productos={productos} />
      )}
    </section>
  );
}

export default ItemListContainer;
