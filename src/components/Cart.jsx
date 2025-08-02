import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, vaciarCarrito, eliminarItem } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const formatearPrecio = (valor) =>
    valor.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    });

  if (cart.length === 0) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <p>Agregá productos para verlos aquí.</p>
        <Link to="/" style={{ color: "#6e0f1f", fontWeight: "600", textDecoration: "underline" }}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2.5rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "2rem", color: "#6e0f1f" }}>🛒 Tu carrito</h2>

      {cart.map((item) => {
        const subtotal = item.precio * item.cantidad;
        return (
          <div
            key={item.id}
            style={{
              marginBottom: "1.5rem",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              style={{ width: "80px", height: "auto", borderRadius: "6px" }}
            />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0 }}>{item.nombre}</h4>
              <p style={{ margin: "0.2rem 0" }}>
                {item.cantidad} x {formatearPrecio(item.precio)} ={" "}
                <strong>{formatearPrecio(subtotal)}</strong>
              </p>
              <button
                onClick={() => eliminarItem(item.id)}
                title="Eliminar este producto"
                style={{
                  backgroundColor: "#eee",
                  border: "none",
                  padding: "6px 12px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}

      <h3 style={{ color: "#333", marginTop: "2rem" }}>Total: {formatearPrecio(total)}</h3>
      <button
        onClick={vaciarCarrito}
        style={{
          marginTop: "1rem",
          backgroundColor: "#6e0f1f",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
}

export default Cart;
