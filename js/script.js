// Creo la clase producto
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Array de productos
const productos = [
    new Producto(1, "Canarias", 5100),
    new Producto(2, "Playadito", 4500),
    new Producto(3, "La Merced", 4700),
    new Producto(4, "Mañanita", 4000),
    new Producto(5, "Unión", 3300),
    new Producto(6, "Cosmico", 4300)
];

// Array para el carrito de compras
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para renderizar los productos en el DOM
const renderizarProductos = () => {
    const productosContainer = document.getElementById("productos-container");
    productosContainer.innerHTML = ""; // Limpia el contenedor

    productos.forEach((producto) => {
        const divProducto = document.createElement("div");
        divProducto.innerHTML = `
            <article class="cajita trans">
                <img src="assets/img/${producto.id}.png" class="articulo">
                <h2 class="parrafo mt-2">${producto.nombre}</h2>
                <h2 class="parrafo mt-2">Precio: $${producto.precio}</h2>
                <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
            </article>
        `;
        productosContainer.appendChild(divProducto);
    });

    // Agrega el evento "Agregar al carrito"
    document.querySelectorAll(".agregar-carrito").forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

// Función para agregar el producto al carrito
const agregarAlCarrito = (e) => {
    const idProducto = parseInt(e.target.getAttribute("data-id"));
    const producto = productos.find((p) => p.id === idProducto);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`Producto ${producto.nombre} agregado al carrito.`);
};

// Función para finalizar la compra
const finalizarCompra = () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }

    // Calcula el total
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

    // Mostrar el total por cartel de alerta
    alert(`Total de la compra: $${total}`);
    carrito = [];
    localStorage.removeItem("carrito");
    renderizarProductos();
};

// Evento para el botón "Finalizar Compra"
document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);

// Renderiza los productos al cargar la página
renderizarProductos();
