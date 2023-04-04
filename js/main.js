const productos = [
    {
        id: "remera-1",
        titulo: "Remera 1",
        imagen: "./img/remeras/remera1.jpg" ,
        precio: 3000 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-2",
        titulo: "Remera 2",
        imagen: "./img/remeras/remera2.jpg" ,
        precio: 3000 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-3",
        titulo: "Remera 3 ",
        imagen: "./img/remeras/remera3.jpg" ,
        precio: 3000 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-4",
        titulo: "Remera 4",
        imagen: "./img/remeras/remera4.jpg" ,
        precio: 3000 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-5",
        titulo: "Remera 5",
        imagen: "./img/remeras/remera5.jpg" ,
        precio: 2000 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-6",
        titulo: "Remera 6",
        imagen: "./img/remeras/remera6.jpg" ,
        precio: 2500 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-7",
        titulo: "Remera 7",
        imagen: "./img/remeras/remera7.jpg" ,
        precio: 2700 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-8",
        titulo: "Remera 8",
        imagen: "./img/remeras/remera8.jpg" ,
        precio: 2500 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-9",
        titulo: "Remera 9",
        imagen: "./img/remeras/remera9.jpg" ,
        precio: 2000 ,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "remera-10",
        titulo: "Remera 10",
        imagen: "./img/remeras/remera10.jpg" ,
        precio: 2000,
        categoria : {
            nombre: "Remeras",
            id: "remeras"   
        }
    },
    {
        id: "pantalon-1",
        titulo: "Pantalón 1",
        imagen: "./img/pantalones/pantalon1.jpg" ,
        precio: 8000 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "pantalon-2",
        titulo: "Pantalón 2",
        imagen: "./img/pantalones/pantalon2.jpg" ,
        precio: 8000 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "pantalon-3",
        titulo: "Pantalón 3",
        imagen: "./img/pantalones/pantalon3.jpg" ,
        precio: 9500 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "pantalon-4",
        titulo: "Pantalón 4",
        imagen: "./img/pantalones/pantalon4.jpg" ,
        precio: 6500 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "pantalon-5",
        titulo: "Pantalón 5",
        imagen: "./img/pantalones/pantalon5.jpg" ,
        precio: 4500 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "pantalon-6",
        titulo: "Pantalón 6",
        imagen: "./img/pantalones/pantalon6.jpg" ,
        precio: 9000 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "pantalon-7",
        titulo: "Pantalón 7",
        imagen: "./img/pantalones/pantalon7.jpg" ,
        precio: 9000 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "pantalon-8",
        titulo: "Pantalón 8",
        imagen: "./img/pantalones/pantalon8.jpg" ,
        precio: 9000 ,
        categoria : {
            nombre: "Pantalones",
            id: "pantalones"   
        }
    },
    {
        id: "abrigo-1",
        titulo: "Abrigo 1",
        imagen: "./img/abrigos/abrigo1.jpg" ,
        precio: 15000 ,
        categoria : {
            nombre: "Abrigos",
            id: "abrigos"   
        }
    },
    {
        id: "abrigo-2",
        titulo: "Abrigo 2",
        imagen: "./img/abrigos/abrigo2.jpg" ,
        precio: 10000 ,
        categoria : {
            nombre: "Abrigos",
            id: "abrigos"   
        }
    },
    {
        id: "abrigo-3",
        titulo: "Abrigo 3",
        imagen: "./img/abrigos/abrigo3.jpg" ,
        precio: 10000 ,
        categoria : {
            nombre: "Abrigos",
            id: "abrigos"   
        }
    },
    {
        id: "abrigo-4",
        titulo: "Abrigo 4",
        imagen: "./img/abrigos/abrigo4.jpg" ,
        precio: 12000 ,
        categoria : {
            nombre: "Abrigos",
            id: "abrigos"   
        }
    },
    {
        id: "abrigo-5",
        titulo: "Abrigo 5",
        imagen: "./img/abrigos/abrigo5.jpg" ,
        precio: 10000 ,
        categoria : {
            nombre: "Abrigos",
            id: "abrigos"   
        }
    },
    {
        id: "abrigo-6",
        titulo: "Abrigo 6",
        imagen: "./img/abrigos/abrigo6.jpg" ,
        precio: 11000 ,
        categoria : {
            nombre: "Abrigos",
            id: "abrigos"   
        }
    },
];

let contenedorProductos = document.querySelector("#contenedor-de-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos)  {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = ` 
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id ="${producto.id}">Agregar</button>
            </div> 
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar()
}

cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productoBoton)

        } else{
            tituloPrincipal.innerText = "Todas las prendas";
            cargarProductos(productos)
        }
        
    })
})

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
    
}
    

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}



function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productosAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productosAgregado.cantidad = 1;
        productosEnCarrito.push(productosAgregado);
    }
    
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};



function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}