// import {productos} from './productos';

document.addEventListener('DOMContentLoaded', () => {
    showindexproducts();
    // LISTAR PRODUCTOS EN EL INDEX
    function showindexproducts() {
        const sliderYogurt = document.getElementById('slider-yogurt');
        const sliderCombos = document.getElementById('slider-combos');
        const sliderSnaks = document.getElementById('slider-snaks');

        productos.forEach(producto => {
            const productoElemento = document.createElement('li');
            productoElemento.classList.add('proyecto');
            productoElemento.innerHTML =
                `
            <img src="${producto.img}">
            <p>${producto.descripcion}</p>
            <h3>${producto.nombre}</h3>
            `;
            if (producto.categoria === "yogurt") {
                sliderYogurt.appendChild(productoElemento);
            } else if (producto.categoria === "snaks") {
                sliderSnaks.appendChild(productoElemento);
            } else if (producto.categoria === "combo") {
                sliderCombos.appendChild(productoElemento);
            };
        })
    };
});

