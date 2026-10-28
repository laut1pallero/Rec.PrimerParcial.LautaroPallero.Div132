
const productosJSON = `[
  { "id": 1, "nombre": "Cheeseburger", "descripcion": "Medallón de carne, cheddar, pepinos y ketchup", "categoria": "Clásicas", "precio": 7500, "stock": 10, "imagen": "img/1.jpg" },
  { "id": 2, "nombre": "Clásica Completa", "descripcion": "Carne, lechuga, tomate y cebolla", "categoria": "Clásicas", "precio": 8200, "stock": 8, "imagen": "img/2.jpg" },
  { "id": 3, "nombre": "Cuarto de Libra", "descripcion": "Carne de 200 g, cheddar, cebolla y tomate", "categoria": "Clásicas", "precio": 9900, "stock": 0, "imagen": "img/3.jpg" },
  { "id": 4, "nombre": "Bacon BBQ", "descripcion": "Carne, panceta crocante, cheddar y salsa barbacoa", "categoria": "Especiales", "precio": 12500, "stock": 5, "imagen": "img/4.jpg" },
  { "id": 5, "nombre": "Provoleta", "descripcion": "Carne, provoleta fundida y cebolla caramelizada", "categoria": "Especiales", "precio": 13200, "stock": 4, "imagen": "img/5.jpg" },
  { "id": 6, "nombre": "Doble Cheddar", "descripcion": "Doble carne, doble cheddar, cebolla y lechuga", "categoria": "Especiales", "precio": 14000, "stock": 3, "imagen": "img/6.jpg" },
  { "id": 7, "nombre": "Combo Clásico", "descripcion": "Hamburguesa completa con papas fritas", "categoria": "Combos", "precio": 15900, "stock": 6, "imagen": "img/7.jpg" },
  { "id": 8, "nombre": "Combo Crispy", "descripcion": "Pollo crispy, coleslaw y papas fritas", "categoria": "Combos", "precio": 16500, "stock": 2, "imagen": "img/8.jpg" },
  { "id": 9, "nombre": "Combo Onion", "descripcion": "Carne, aros de cebolla, cheddar y papas fritas", "categoria": "Combos", "precio": 17800, "stock": 1, "imagen": "img/9.jpg" }
]`;

// Ejercicio 3.1
let productos = [
  { id: 1, nombre: "Cheeseburger", descripcion: "Medallón de carne, cheddar, pepinos y ketchup", categoria: "Clásicas", precio: 7500, stock: 10, imagen: "img/1.jpg" },
  { id: 2, nombre: "Clásica Completa", descripcion: "Carne, lechuga, tomate y cebolla", categoria: "Clásicas", precio: 8200, stock: 8, imagen: "img/2.jpg" },
  { id: 3, nombre: "Cuarto de Libra", descripcion: "Carne de 200 g, cheddar, cebolla y tomate", categoria: "Clásicas", precio: 9900, stock: 0, imagen: "img/3.jpg" },
  { id: 4, nombre: "Bacon BBQ", descripcion: "Carne, panceta crocante, cheddar y salsa barbacoa", categoria: "Especiales", precio: 12500, stock: 5, imagen: "img/4.jpg" },
  { id: 5, nombre: "Provoleta", descripcion: "Carne, provoleta fundida y cebolla caramelizada", categoria: "Especiales", precio: 13200, stock: 4, imagen: "img/5.jpg" },
  { id: 6, nombre: "Doble Cheddar", descripcion: "Doble carne, doble cheddar, cebolla y lechuga", categoria: "Especiales", precio: 14000, stock: 3, imagen: "img/6.jpg" },
  { id: 7, nombre: "Combo Clásico", descripcion: "Hamburguesa completa con papas fritas", categoria: "Combos", precio: 15900, stock: 6, imagen: "img/7.jpg" },
  { id: 8, nombre: "Combo Crispy", descripcion: "Pollo crispy, coleslaw y papas fritas", categoria: "Combos", precio: 16500, stock: 2, imagen: "img/8.jpg" },
  { id: 9, nombre: "Combo Onion", descripcion: "Carne, aros de cebolla, cheddar y papas fritas", categoria: "Combos", precio: 17800, stock: 1, imagen: "img/9.jpg" }
];

localStorage.setItem("productos", productosJSON);

let productosGuardados = JSON.parse(localStorage.getItem("productos"));

console.table(productosGuardados);

// Ejercicio 3.2
const contenedorProductos = document.getElementById("products-container");
const tituloTienda = document.getElementById("titulo-tienda");

function mostrarProductos(lista) {
    contenedorProductos.innerHTML = "";

    lista.forEach(function(producto) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("div");
        precio.className = "precio";
        precio.textContent = "$" + producto.precio;

        const boton = document.createElement("button");

        if(producto.stock == 0) {
            boton.textContent = "SIN STOCK";
            boton.disabled = true;

        } else {
            boton.textContent = "AGREGAR AL CARRITO";
            boton.addEventListener("click", function() {
                agregarAlCarrito(producto.id);
            });
        }

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedorProductos.appendChild(tarjeta);
    });
}

tituloTienda.addEventListener("click", function() {
    mostrarProductos(productos);
});

mostrarProductos(productos);
