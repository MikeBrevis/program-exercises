/* Una importante marca de computadoras permite elegir cierta configuración del equipo a comprar. Para ello existe la siguiente escala de precios: 

(VER TABLA)
i5 (1) i7 (2) i9 (3)
8 RAM (1) USD 800 USD 900 USD 1200
16 RAM (2) USD 900 USD 1000 USD 1400
32 RAM (3) USD 1000 USD 1400 USD 2000

Además, el equipo viene con un disco que permite almacenar 500 GB de
información y que se puede ampliar a 1 TB si así lo desea, lo cual tiene un costo adicional de USD 300.
Hacer un programa que solicite la opción de procesador, la opción de memoria RAM, y si extiende el disco o no (ingresa 1 para extender y 0 para no extender) y calcule y emita por pantalla el monto de la máquina seleccionada.
*/

let pc_processor = parseInt(prompt("Enter the processor PC ( 1=i5, 2=i7, 3=i9"))

let price = 0

switch (pc_processor) {
    case 1:
        let ram = parseInt(prompt("Enter the PC RAM ( 1=8GB, 2=16GB, 3=32GB"))
        switch (ram) {
            case 1:
                price = 800
                console.log("PC PROCESSOR = i5; RAM 8gb. The price of the PC is " + price)
                break

            case 2:
                price = 900
                console.log("PC PROCESSOR = i5; RAM 16gb. The price of the PC is " + price)
                break

            case 3:
                price = 1000
                console.log("PC PROCESSOR = i5; RAM 32gb. The price of the PC is " + price)
                break

            default:
                console.log("The option entered is not valid")
                break
        }
        break


    case 2:
        let ram2 = parseInt(prompt("Enter the PC RAM ( 1=8GB, 2=16GB, 3=32GB"))
        switch (ram2) {
            case 1:
                price = 900
                console.log("PC PROCESSOR = i7; RAM 8gb. The price of the PC is " + price)
                break

            case 2:
                price = 1000
                console.log("PC PROCESSOR = i7; RAM 16gb. The price of the PC is " + price)
                break

            case 3:
                price = 1400
                console.log("PC PROCESSOR = i7; RAM 32gb. The price of the PC is " + price)
                break

            default:
                console.log("The option entered is not valid")
                break
        }
        break

        case 3:
            let ram3 = parseInt(prompt("Enter the PC RAM ( 1=8GB, 2=16GB, 3=32GB"))
            switch (ram3) {
                case 1:
                    price = 1200
                    console.log("PC PROCESSOR = i9; RAM 8gb. The price of the PC is " + price)
                    break
    
                case 2:
                    price = 1400
                    console.log("PC PROCESSOR = i9; RAM 16gb. The price of the PC is " + price)
                    break
    
                case 3:
                    price = 2000
                    console.log("PC PROCESSOR = i9; RAM 32gb. The price of the PC is " + price)
                    break
    
                default:
                    console.log("The option entered is not valid")
                    break
            }
    }

