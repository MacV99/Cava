document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const total = document.getElementById('total');
    const botonLimpiarCarrito = document.getElementById('limpiar-carrito');
    const botonHacerPedido = document.getElementById('hacer-pedido');
    let carrito = [];

    // BOTONES PARA AGREGAR PRODUCTO AL CARRITO
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const producto = e.target.closest('.producto');
            const id = producto.dataset.id;
            const nombre = producto.querySelector('h3').textContent;
            const precio = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));

            const itemCarrito = carrito.find(item => item.id === id);
            console.log(itemCarrito);

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

    botonHacerPedido.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('El carrito está vació');
            return;
        }

        const nombreCliente = prompt('Ingrese su nombre');
        const celularCliente = prompt('ingrese su numero de celular');

        if (!nombreCliente || !celularCliente) {
            alert('Debe ingresar su nombre y número de celular');
            return;
        }

        let mensaje = `Pedido de ${nombreCliente} (${celularCliente}):\n\n`;
        carrito.forEach(item => {
            mensaje += `${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad}\n`;
        });

        mensaje += `\nTotal: $${total.textContent}`;

        const urlWhatsApp = `https://wa.me/3172366425?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');


    });

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let totalCarrito = 0;

        carrito.forEach(item => {
            const liProducto = document.createElement('li');
            liProducto.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad} 
                        <button class="quitar-carrito" data-id="${item.id}">-</button>`;
            listaCarrito.appendChild(liProducto);

            totalCarrito += item.precio * item.cantidad;
        });

        total.textContent = totalCarrito.toFixed(2);
    }
});
