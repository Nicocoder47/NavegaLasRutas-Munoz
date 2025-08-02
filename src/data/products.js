const productos = [
  {
    id: "1",
    nombre: "Château Margaux 2015",
    precio: 95000,
    categoria: "tintos",
    descripcion: "Vino tinto francés de Burdeos, refinado y estructurado, con notas de mora, regaliz y sutil roble.",
    maridaje: "Carnes rojas asadas, cordero al romero y quesos maduros.",
    stock: 4,
    imagen: "/img/margaux.jpeg"
  },
  {
    id: "2",
    nombre: "Vega Sicilia Único",
    precio: 82000,
    categoria: "tintos",
    descripcion: "Ícono español de Ribera del Duero, de gran elegancia con aromas a ciruela, cuero y tabaco.",
    maridaje: "Cochinillo, guisos ibéricos y carnes de caza.",
    stock: 5,
    imagen: "/img/vega.png"
  },
  {
    id: "3",
    nombre: "Sassicaia 2016",
    precio: 72000,
    categoria: "tintos",
    descripcion: "Super Tuscan italiano con Cabernet Sauvignon, elegante, profundo y persistente.",
    maridaje: "Pastas con ragú, carnes braseadas y embutidos gourmet.",
    stock: 6,
    imagen: "/img/Sassicaia 2016.png"
  },
  {
    id: "4",
    nombre: "Opus One",
    precio: 99000,
    categoria: "tintos",
    descripcion: "Blend bordelés de Napa Valley, potente y armónico con cuerpo y taninos suaves.",
    maridaje: "Cortes premium, pato confitado y platos con trufa negra.",
    stock: 3,
    imagen: "/img/opus.png"
  },
  {
    id: "5",
    nombre: "Pingus",
    precio: 105000,
    categoria: "tintos",
    descripcion: "Vino artesanal de producción limitada, profundo, especiado y de carácter único.",
    maridaje: "Carnes de caza, trufas, risotto de hongos.",
    stock: 2,
    imagen: "/img/pingus.png"
  },
  {
    id: "6",
    nombre: "Almaviva",
    precio: 43000,
    categoria: "tintos",
    descripcion: "Blend chileno de alta gama con Cabernet Sauvignon y Carmenere, sedoso y vibrante.",
    maridaje: "Asado criollo, costilla braseada y quesos intensos.",
    stock: 8,
    imagen: "/img/alma.png"
  },
  {
    id: "7",
    nombre: "Catena Zapata Adrianna Vineyard Malbec",
    precio: 25000,
    categoria: "tintos",
    descripcion: "Malbec argentino de altura, mineral, elegante y con excelente potencial de guarda.",
    maridaje: "Ojo de bife, empanadas salteñas y risotto de hongos.",
    stock: 10,
    imagen: "/img/catena.png"
  },
  {
    id: "8",
    nombre: "Barolo Monfortino Riserva",
    precio: 87000,
    categoria: "tintos",
    descripcion: "Nebbiolo del Piamonte, estructurado y complejo, con taninos firmes y gran longevidad.",
    maridaje: "Pastas con ragú, risotto de trufas y carnes de caza.",
    stock: 3,
    imagen: "/img/barolo.png"
  },
  {
    id: "9",
    nombre: "Château d'Yquem Sauternes",
    precio: 65000,
    categoria: "dulces",
    descripcion: "Vino dulce francés dorado, con notas de miel, piña, azafrán y albaricoque.",
    maridaje: "Foie gras, quesos azules y postres a base de frutas.",
    stock: 4,
    imagen: "/img/chat.png"
  },
  {
    id: "10",
    nombre: "Dom Pérignon Vintage",
    precio: 52000,
    categoria: "espumantes",
    descripcion: "Champagne francés prestigioso con burbujas finas, aromas a brioche y cítricos.",
    maridaje: "Sushi, mariscos, ostras y como aperitivo elegante.",
    stock: 7,
    imagen: "/img/dom.png"
  }
];

// Simulación de fetch
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === id));
    }, 1000);
  });
};

export const getProductosPorCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoriaId));
    }, 1000);
  });
};
