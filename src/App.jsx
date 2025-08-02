import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import RoutesApp from './routes/RoutesApp';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar />
          </header>

          <main style={{ padding: '2rem 1rem', minHeight: '80vh' }}>
            <RoutesApp />
          </main>

          <footer style={{
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: '#2e0f13',
            color: '#fff',
            fontSize: '0.85rem',
            boxShadow: '0 -2px 6px rgba(0,0,0,0.15)'
          }}>
            <small>&copy; {new Date().getFullYear()} Cantini · Vinoteca React JS</small>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
