# 📚 Aplicación Web en Vue.js

## 📌 Nombre del proyecto

Aplicación Web – Catálogo de Libros con Vue.js

---

# 🎯 Objetivo del proyecto

Desarrollar una aplicación web que permita gestionar un catálogo personal de libros utilizando **Vue.js 2**.
El proyecto tiene como finalidad aplicar conceptos fundamentales del desarrollo frontend como **componentes, rutas, formularios, manejo de datos y persistencia con LocalStorage**, además de organizar el código en una estructura clara y reutilizable.

---

# 📝 Descripción

Esta aplicación permite al usuario administrar un catálogo de libros mediante una interfaz web sencilla e intuitiva.

El sistema permite:

* Visualizar una lista de libros registrados.
* Filtrar libros por autor o categoría.
* Consultar el detalle de un libro específico.
* Agregar nuevos libros mediante un formulario.
* Editar información de un libro existente.
* Eliminar libros del catálogo.

La aplicación organiza su lógica utilizando **componentes reutilizables, vistas separadas y servicios**, lo que facilita el mantenimiento y la comprensión del código.

---

# ⚙️ Funcionalidades

* Mostrar el catálogo completo de libros.
* Filtrar libros por autor.
* Filtrar libros por categoría.
* Ver información detallada de cada libro.
* Agregar nuevos libros al catálogo mediante un formulario.
* Editar información de un libro existente.
* Eliminar libros del catálogo.
* Mostrar animaciones al eliminar elementos de la lista.
* Guardar la información de los libros utilizando **LocalStorage**.

---

# 🧠 Conceptos aplicados

* Uso de **componentes reutilizables** en Vue.
* Organización del proyecto en **vistas, componentes y servicios**.
* Uso de **Vue Router** para la navegación entre páginas.
* Uso de **propiedades computadas (computed)** para filtrar datos.
* Manejo de **eventos personalizados ($emit)** entre componentes.
* Persistencia de datos utilizando **LocalStorage**.
* Animaciones de listas utilizando **transition-group**.
* Diseño responsive básico utilizando **CSS Grid y Flexbox**.

---

# 🔎 Validaciones implementadas

* Se valida que los campos obligatorios del formulario estén completos antes de agregar un libro.
* Se controla que el usuario seleccione una categoría válida al registrar un libro.
* Se muestran mensajes de error cuando los datos ingresados no cumplen las condiciones requeridas.
* Se evita guardar libros con información incompleta.
* Se muestran mensajes de confirmación cuando un libro es agregado correctamente.

---

# 🛠️ Tecnologías utilizadas

* **Vue.js 2**
* **Vue Router**
* **JavaScript**
* **HTML**
* **CSS**
* **LocalStorage**
* **Visual Studio Code**

---

# 📥 Instalación

1. Descargar o clonar el repositorio.

2. Abrir la carpeta del proyecto en **Visual Studio Code**.

3. Instalar las dependencias del proyecto:

```bash
npm install
```

4. Ejecutar el servidor de desarrollo:

```bash
npm run serve
```

5. Abrir la aplicación en el navegador en la siguiente dirección:

```
http://localhost:8080
```

---

# ▶️ Uso

1. Abrir la aplicación en el navegador.
2. En la página de inicio se mostrará una pantalla de bienvenida.
3. Acceder al **Catálogo** para visualizar todos los libros registrados.
4. Utilizar los filtros para buscar libros por **autor o categoría**.
5. Seleccionar un libro para visualizar su **detalle completo**.
6. Desde el menú de navegación se puede acceder a **Agregar libro** para registrar un nuevo libro en el sistema.
7. Los cambios se guardan automáticamente en **LocalStorage**.

---

# 📸 Capturas de pantalla

A continuación se presentan evidencias del funcionamiento de la aplicación.
Las capturas incluyen archivos GIF que permiten visualizar el comportamiento de la aplicación y la interacción con el usuario.

Las capturas utilizadas en este proyecto son:

* **AgregarLibro.gif**
* **BookList.gif**
* **Categorias.gif**
* **EliminarLibro.gif**

Estas capturas muestran:

* Registro de nuevos libros.
* Visualización del catálogo.
* Navegación por categorías.
* Eliminación de libros con animación.

---

# 📂 Estructura del proyecto

```
📁 PROYECTO MODULO 5 - VUE.JS

│
├── 📁 screenshots
│   ├── AgregarLibro.gif
│   ├── BookList.gif
│   ├── Categorias.gif
│   └── EliminarLibro.gif
│
├── 📁 src
│   ├── 📁 assets
│   │   └── styles.css
│   │
│   ├── 📁 components
│   │   └── Libro.vue
│   │
│   ├── 📁 router
│   │   └── index.js
│   │
│   ├── 📁 services
│   │   └── bookService.js
│   │
│   ├── 📁 store
│   │   └── index.js
│   │
│   ├── 📁 views
│   │   ├── InicioView.vue
│   │   ├── ListaLibrosView.vue
│   │   ├── CategoriasView.vue
│   │   ├── DetalleLibroView.vue
│   │   └── AgregarLibroView.vue
│   │
│   ├── App.vue
│   └── main.js
│─
├── Proyecto Vue.pdf
├── package.json
└── README.md
```

---

# 🔍 Análisis del proyecto

Durante el desarrollo del proyecto se aplicaron los conceptos fundamentales de **Vue.js** trabajados durante el módulo.

Se organizó la aplicación utilizando una estructura basada en **componentes y vistas**, lo que permite separar las responsabilidades de cada parte del sistema. El uso de un **servicio (bookService)** permitió centralizar la lógica relacionada con el manejo de los libros y la persistencia de datos.

Además, se implementaron filtros dinámicos mediante propiedades computadas para mejorar la experiencia de búsqueda dentro del catálogo.

El uso de **LocalStorage** permitió simular una pequeña base de datos en el navegador para mantener la información de los libros entre sesiones.

---

# 🧠 Reflexión final

Este proyecto permitió reforzar los conceptos fundamentales del desarrollo frontend utilizando **Vue.js**, incluyendo la creación de componentes, la navegación entre vistas y la gestión de datos en la aplicación.

La implementación de formularios, filtros y almacenamiento en el navegador ayudó a comprender cómo construir aplicaciones interactivas organizadas y escalables.

Además, el proyecto permitió practicar la estructuración del código y la separación de responsabilidades, lo cual es una práctica importante en el desarrollo de aplicaciones web modernas.

