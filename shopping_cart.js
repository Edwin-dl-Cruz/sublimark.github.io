// Obtener elementos del DOM
const agregarBotones = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Agregar evento click a los botones de agregar al carrito
agregarBotones.forEach((boton) => {
  boton.addEventListener('click', agregarAlCarrito);
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  const producto = event.target.parentElement;
  const titulo = producto.querySelector('h5').textContent;

  // Crear elemento li con el título del producto
  const li = document.createElement('li');
  li.textContent = titulo;
  li.classList.add('carrito-lista'); // Agregar una clase al elemento

  // Crear botón de eliminar
  const eliminarBtn = document.createElement('button');
  eliminarBtn.textContent = 'Eliminar';
  eliminarBtn.classList.add('btn-dark');
  eliminarBtn.addEventListener('click', eliminarProducto);

  // Agregar el botón de eliminar al elemento li
  li.appendChild(eliminarBtn);

  // Agregar el producto al carrito
  listaCarrito.appendChild(li);
}

// Función para eliminar un producto del carrito
function eliminarProducto(event) {
  const productoAEliminar = event.target.parentElement;
  listaCarrito.removeChild(productoAEliminar);
}

// Vaciar el carrito al hacer click en el botón "Vaciar Carrito"
vaciarCarritoBtn.addEventListener('click', () => {
  listaCarrito.innerHTML = '';
});