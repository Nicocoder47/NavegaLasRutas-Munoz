import { Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Cart from '../components/Cart'

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Todos los productos" />} />
      <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
      <Route path="/producto/:id" element={<ItemDetailContainer />} />
      <Route path="/carrito" element={<Cart />} />
      <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 - Página no encontrada</h2>} />
    </Routes>
  )
}

export default RoutesApp
