const STORAGE_KEY = "libros";

const defaultBooks = [
  {
    id: 1,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    categoria: "Romance",
    descripcion: "Historia romantica clasica sobre el amor y las expectativas sociales."
  },
  {
    id: 2,
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    categoria: "Clasico",
    descripcion: "Aventuras de cuatro hermanas que crecen junto a sus sueños."
  },
  {
    id: 3,
    titulo: "Jane Eyre",
    autor: "Charlotte Bronte",
    categoria: "Drama",
    descripcion: "Relato sobre independencia y determinacion en el siglo XIX."
  }
];

const cloneBooks = () => defaultBooks.map(book => ({ ...book }));

const guardarLibros = libros => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(libros));
  return libros;
};

const obtenerLibros = () => {
  const almacenados = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (Array.isArray(almacenados) && almacenados.length) {
    return almacenados;
  }

  const iniciales = cloneBooks();
  guardarLibros(iniciales);
  return iniciales;
};

const obtenerLibroPorId = id => {
  const libros = obtenerLibros();
  return libros.find(book => book.id === Number(id)) || null;
};

const obtenerCategorias = () => {
  const libros = obtenerLibros();
  return [...new Set(libros.map(book => book.categoria))];
};

const agregarLibro = bookPayload => {
  const libros = obtenerLibros();
  const nuevoLibro = {
    id: Date.now(),
    ...bookPayload
  };
  libros.push(nuevoLibro);
  guardarLibros(libros);
  return nuevoLibro;
};

const actualizarLibro = bookPayload => {
  const libros = obtenerLibros();
  const index = libros.findIndex(book => book.id === Number(bookPayload.id));
  if (index === -1) {
    return null;
  }

  libros[index] = {
    ...libros[index],
    ...bookPayload,
    id: libros[index].id
  };

  guardarLibros(libros);
  return libros[index];
};

const eliminarLibro = id => {
  const libros = obtenerLibros().filter(book => book.id !== Number(id));
  guardarLibros(libros);
  return libros;
};

export default {
  obtenerLibros,
  obtenerLibroPorId,
  obtenerCategorias,
  agregarLibro,
  actualizarLibro,
  eliminarLibro
};
