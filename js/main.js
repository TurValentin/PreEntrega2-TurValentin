let precioRemeras = 2500
let precioBuzos = 4000
let precioPantalones = 3000
let precioZapatillas = 6000

function precio_Total(cantidad, prenda) {

        let subtotal = cantidad * prenda
        alert(`El total a pagar es de ${subtotal} por ${cantidad} prendas.`) 
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
                     precio_Total(cantidad, precioRemeras)

                     numero = parseInt(prompt(`Presione el número según su elección.
                     [1] Remeras
                     [2] Buzos
                     [3] Pantalones
                     [4] Zapatillas
                     [5] para terminar su compra`));
                }
                else if(numero == 2){
                    cantidad = parseInt(prompt("El precio de los buzos es de $4000. ¿Cuántos desea comprar?"))
                    precio_Total(cantidad, precioBuzos)

                    numero = parseInt(prompt(`Presione el número según su elección.
                    [1] Remeras
                    [2] Buzos
                    [3] Pantalones
                    [4] Zapatillas
                    [5] para terminar su compra`));   
               }
               else if(numero == 3){
                   cantidad = parseInt(prompt("El precio de los pantalones es de $3000. ¿Cuántos desea comprar?"))
                   precio_Total(cantidad, precioPantalones)

                   numero = parseInt(prompt(`Presione el número según su elección.
                   [1] Remeras
                   [2] Buzos
                   [3] Pantalones
                   [4] Zapatillas
                   [5] para terminar su compra`));   
               }
                else if(numero == 4){
                   cantidad = parseInt(prompt("El precio de las zapatillas es de $6000. ¿Cuántas desea comprar?"))
                   precio_Total(cantidad, precioZapatillas)

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