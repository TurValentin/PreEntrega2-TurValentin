let precioRemeras = 2500
let precioBuzos = 4000
let precioPantalones = 3000
let precioZapatillas = 6000
let cantidadTotal = 0
let total = 0

function montoPrendas(cantidad, prenda) {
        let subtotal = cantidad * prenda
        total += subtotal;
        alert(`El monto de esta compra es de ${subtotal} por ${cantidad} prendas.`) 
} 

function precioTotal(){
    alert(`Gracias por elegirnos! El precio total de la compra es de $${total} por ${cantidadTotal} prendas`)
}

let nombre = prompt("Ingrese su nombre")
alert(`Bienvenido/a ${nombre}! ¿Qué desea comprar?`);


let numero = parseInt(prompt(`Presione el número según su elección.
[1] Remeras
[2] Buzos
[3] Pantalones
[4] Zapatillas
[5] para terminar su compra`));

while(numero != 5) {
                if(numero == 1){                        
                     cantidad = parseInt(prompt("El precio de las remeras es de $2500. ¿Cuántas desea comprar?"))
                     montoPrendas(cantidad, precioRemeras)
                     cantidadTotal += cantidad

                     numero = parseInt(prompt(`Presione el número según su elección.
                     [1] Remeras
                     [2] Buzos
                     [3] Pantalones
                     [4] Zapatillas
                     [5] para terminar su compra`));
                }
                else if(numero == 2){
                    cantidad = parseInt(prompt("El precio de los buzos es de $4000. ¿Cuántos desea comprar?"))
                    montoPrendas(cantidad, precioBuzos)
                    cantidadTotal += cantidad

                    numero = parseInt(prompt(`Presione el número según su elección.
                    [1] Remeras
                    [2] Buzos
                    [3] Pantalones
                    [4] Zapatillas
                    [5] para terminar su compra`));   
               }
               else if(numero == 3){
                   cantidad = parseInt(prompt("El precio de los pantalones es de $3000. ¿Cuántos desea comprar?"))
                   montoPrendas(cantidad, precioPantalones)
                   cantidadTotal += cantidad

                   numero = parseInt(prompt(`Presione el número según su elección.
                   [1] Remeras
                   [2] Buzos
                   [3] Pantalones
                   [4] Zapatillas
                   [5] para terminar su compra`));   
               }
                else if(numero == 4){
                   cantidad = parseInt(prompt("El precio de las zapatillas es de $6000. ¿Cuántas desea comprar?"))
                   montoPrendas(cantidad, precioZapatillas)
                   cantidadTotal += cantidad

                   numero = parseInt(prompt(`Presione el número según su elección.
                   [1] Remeras
                   [2] Buzos
                   [3] Pantalones
                   [4] Zapatillas
                   [5] para terminar su compra`));
                }
                else{
                        alert("Ingrese un numero de los indicados anteriormente");

                        numero = parseInt(prompt(`Presione el número según su elección.
                        [1] Remeras
                        [2] Buzos
                        [3] Pantalones
                        [4] Zapatillas
                        [5] para terminar su compra`));
                }
            }


            precioTotal();