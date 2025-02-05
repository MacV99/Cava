document.addEventListener("DOMContentLoaded", () => {
    const listaCarrito = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    const botonLimpiarCarrito = document.getElementById("limpiar-carrito");
    const botonHacerPedido = document.getElementById("hacer-pedido");
    const botonCancelarPedido = document.getElementById("cancelar-pedido");
    const detallesCliente = document.getElementById("datos-cliente");
    const selectProduct = document.getElementById("select-product"); // Selección del select

    let carrito = [];
    let selectedCategory = selectProduct.value; // Variable que guarda el valor seleccionado inicialmente

    // Actualizar la variable cuando cambie el valor del select
    selectProduct.addEventListener("change", (e) => {
        selectedCategory = e.target.value;
        showcartprodcuts(); // Mostrar productos cada vez que se cambie el valor del select
    });

    // Función para mostrar los productos en el carrito
    function showcartprodcuts() {
        const cartList = document.getElementById("cart-list");
        cartList.innerHTML = ""; // Limpiar lista antes de mostrar productos

        // Filtrar productos por la categoría seleccionada o mostrar todos si es 'TODOS'
        const productosFiltrados =
            selectedCategory === "TODOS"
                ? productos
                : productos.filter(
                    (producto) => producto.categoria === selectedCategory
                );

        // Crear y añadir productos al carrito
        productosFiltrados.forEach((producto) => {
            const cartproduct = document.createElement("div");
            cartproduct.classList.add("producto");
            cartproduct.setAttribute("data-id", producto.id);
            cartproduct.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(3)}</p>
                <button class="agregar-carrito">Añadir al carrito</button>
            `;
            cartList.appendChild(cartproduct);
        });

        // Asignar eventos a los botones de "Añadir al carrito"
        cartList.querySelectorAll(".agregar-carrito").forEach((boton) => {
            boton.addEventListener("click", (e) => {
                const productoElemento = e.target.closest(".producto");
                const id = parseInt(productoElemento.getAttribute("data-id"));
                const productoEncontrado = productos.find((p) => p.id === id);

                const itemCarrito = carrito.find(
                    (item) => item.id === productoEncontrado.id
                );

                if (itemCarrito) {
                    itemCarrito.cantidad++;
                } else {
                    carrito.push({
                        id: productoEncontrado.id,
                        nombre: productoEncontrado.nombre,
                        precio: productoEncontrado.precio,
                        cantidad: 1,
                    });
                }

                actualizarCarrito();
            });
        });
    }

    // Función para actualizar el carrito
    function actualizarCarrito() {
        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            listaCarrito.innerHTML = "<h2>¡¡Agrega productos a tu carrito!!</h2>";
        }

        let totalCarrito = 0;

        carrito.forEach((item) => {
            const liProducto = document.createElement("li");
            liProducto.innerHTML = `
                <p>${item.nombre}</p>
                <p>$${item.precio.toFixed(3)} x ${item.cantidad}</p>
                <div>
                    <button class="restar-producto" data-id="${item.id
                }">-</button>
                    <button class="sumar-producto" data-id="${item.id
                }">+</button>
                </div>`;
            listaCarrito.appendChild(liProducto);
            totalCarrito += item.precio * item.cantidad;
        });

        total.textContent = totalCarrito.toFixed(3);
    }

    // Manejar eventos de sumar y restar productos en el carrito
    listaCarrito.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        const itemCarrito = carrito.find((item) => item.id === id);

        if (itemCarrito) {
            if (e.target.classList.contains("restar-producto")) {
                if (itemCarrito.cantidad > 1) {
                    itemCarrito.cantidad--;
                } else {
                    carrito = carrito.filter((item) => item.id !== id);
                }
            } else if (e.target.classList.contains("sumar-producto")) {
                itemCarrito.cantidad++;
            }
            actualizarCarrito();
        }
    });

    // Botón para limpiar el carrito
    botonLimpiarCarrito.addEventListener("click", () => {
        carrito = [];
        actualizarCarrito();
    });

    // Cerrar si el carrito está vacío al abrir los detalles del cliente
    detallesCliente.addEventListener("toggle", () => {
        if (carrito.length === 0) {
            detallesCliente.open = false;
        }
    });

    // Botón para hacer el pedido
    botonHacerPedido.addEventListener("click", () => {
        const nombreCliente = document.getElementById("name").value.trim();
        const metodoPagoCliente = document
            .getElementById("metodo-pago")
            .value.trim();
        const direccionCliente = document.getElementById("direccion").value.trim();

        if (!nombreCliente || !metodoPagoCliente || !direccionCliente) {
            alert("Por favor, completa todos los campos del pedido.");
            return;
        }

        let mensaje = `Pedido de: *${nombreCliente}* \nMétodo de pago: *${metodoPagoCliente}*\nDirección y barrio: *${direccionCliente}*\n\n`;
        carrito.forEach((item) => {
            mensaje += `- ${item.nombre} - $${item.precio.toFixed(3)} x ${item.cantidad
                }\n`;
        });

        const totalCarrito = parseFloat(total.textContent);
        mensaje += `\nTotal: *$${totalCarrito.toFixed(3)}*`;

        const urlWhatsApp = `https://wa.me/3172366425?text=${encodeURIComponent(
            mensaje
        )}`;
        window.open(urlWhatsApp, "_blank");
        console.log("TEST");
    });

    // Botón para cancelar el pedido
    botonCancelarPedido.addEventListener("click", () => {
        detallesCliente.open = false;
    });

    // Llamado inicial de la función para mostrar los productos
    showcartprodcuts();
});
