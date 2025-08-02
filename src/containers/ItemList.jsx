import Item from './Item';

function ItemList({ productos }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      justifyContent: 'center',
      marginTop: '2rem'
    }}>
      {productos.map(prod => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default ItemList;
