import { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './NavBar.css';
import logo from '/img/logo-cantini.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useContext(CartContext);

  const categorias = [
    { id: 'tintos', nombre: 'Tintos' },
    { id: 'blancos', nombre: 'Blancos' },
    { id: 'rosados', nombre: 'Rosados' },
    { id: 'espumantes', nombre: 'Espumantes' },
    { id: 'dulces', nombre: 'Dulces' },
  ];

  return (
    <header className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo Vinoteca Cantini" className="navbar-logo-img" />
          <span className="navbar-logo-text">Vinoteca Cantini</span>
        </Link>
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          Inicio
        </NavLink>
        {categorias.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/categoria/${cat.id}`}
            className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {cat.nombre}
          </NavLink>
        ))}
        <NavLink to="/carrito" className="nav-link cart-link" onClick={() => setIsOpen(false)}>
          🛒 Carrito
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
