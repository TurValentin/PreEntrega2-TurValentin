const prendas = [
    {nombre: "remera", precio: 2500},
    {nombre: "camisa", precio: 2800},
    {nombre: "buzo", precio: 4000},
    {nombre: "jean", precio: 4000},
    {nombre: "pantalon", precio: 3000},
    {nombre: "zapatilla", precio: 6000},
];

let carrito = []

let nombre = prompt("Ingrese su nombre")
alert(`Bienvenido/a ${nombre}!`);

let seleccion = prompt("¿Desea hacer alguna compra? Conteste con ( si ) o con ( no )")

while(seleccion != "si" && seleccion != "no"){
    alert("Ingrese alguna de las dos opciones validas (si o no)")
    seleccion = prompt("¿Desea hacer alguna compra?")
}

if(seleccion == "si"){
    alert("A continuación nuestra indumentaria...")
    let todasLasPrendas = prendas.map(
        (prenda) => prenda.nombre + " " + "$" + prenda.precio
        );

    alert(todasLasPrendas.join(" / "))
} else if (seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto!");
}

while(seleccion != "no") {
    let prenda = prompt(`Agregá una prenda a tu carrito
    -remera-
    -camisa-
    -buzo-
    -jean-
    -pantalon-
    -zapatilla-
    `)
    let precio = 0

    if(prenda == "remera" || prenda == "camisa" || prenda == "buzo" || prenda == "jean" || prenda == "pantalon" || prenda == "zapatilla") {
         switch(prenda){
            case "remera": 
            precio = 2500
            break;
            case "camisa": 
            precio = 2800
            break;
            case "buzo": 
            precio = 4000
            break;
            case "jean": 
            precio = 4000
            break;
            case "pantalon": 
            precio = 3000
            break;
            case "zapatilla": 
            precio = 6000
            break;
            default:
            break;
         }
         let unidades = parseInt(prompt(`¿Cuántas unidades desea llevar?`))

         carrito.push({prenda, unidades, precio})

    }  else{
        alert(`No contamos con esa prenda en stock`)
    }

    seleccion = prompt(`¿Desea seguir comprando? ( si ) o ( no )`)
    
    while (seleccion === "no") {
        alert(`Gracias por la compra, Hasta pronto!`)
        alert(`A continuación su carrito final...`)
        carrito.forEach((carritoFinal) => {
            alert(`Prenda: ${carritoFinal.prenda} / Unidades: ${carritoFinal.unidades} / Total a pagar por producto: $${carritoFinal.precio * carritoFinal.unidades}.`)
        })
    break;
    }

}

const total = carrito.reduce((ecc, el) => ecc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: $${total}.`)