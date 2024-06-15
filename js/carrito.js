// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.agregar-carrito');
  const listaCarrito = document.getElementById('lista-carrito');
  const total = document.getElementById('total');
  const botonLimpiarCarrito = document.getElementById('limpiar-carrito');
  let carrito = [];
  
  botonesAgregar.forEach(boton => {
      boton.addEventListener('click', (e) => {
          const producto = e.target.closest('.producto');
          const id = producto.dataset.id;
          const nombre = producto.querySelector('h3').textContent;
          const precio = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));
          
          const itemCarrito = carrito.find(item => item.id === id);
          if (itemCarrito) {
              itemCarrito.cantidad++;
          } else {
              carrito.push({ id, nombre, precio, cantidad: 1 });
          }
          
          actualizarCarrito();
      });
  });

  listaCarrito.addEventListener('click', (e) => {
      if (e.target.classList.contains('quitar-carrito')) {
          const id = e.target.dataset.id;
          const itemCarrito = carrito.find(item => item.id === id);
          if (itemCarrito) {
              if (itemCarrito.cantidad > 1) {
                  itemCarrito.cantidad--;
              } else {
                  carrito = carrito.filter(item => item.id !== id);
              }
          }
          actualizarCarrito();
      }
  });

  botonLimpiarCarrito.addEventListener('click', () => {
      carrito = [];
      actualizarCarrito();
  });
  
  function actualizarCarrito() {
      listaCarrito.innerHTML = '';
      let totalCarrito = 0;
      
      carrito.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad} 
                          <button class="quitar-carrito" data-id="${item.id}">Quitar</button>`;
          listaCarrito.appendChild(li);
          
          totalCarrito += item.precio * item.cantidad;
      });
      
      total.textContent = totalCarrito.toFixed(2);
  }
});
