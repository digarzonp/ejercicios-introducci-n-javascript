//1) Escribir un programa que pregunte al usuario su nombre, y luego lo salude 
let nombre;

//nombre= prompt()
//document.write(nombre)
//console.log("hola " + nombre)

//2) Calcular el perimetro y area de un rectangulo daada si base y altura

function calcular(base, altura){
    let area;
    let perimetro;

    area=base*altura
    perimetro=2*(base+altura);

    return [area, perimetro];
}

let resultado =calcular(5,4);
//console.log(resultado[0])
//console.log(resultado[1])

//contante: valor que una vez es asignado nunca cambia cont
// let para variable de ambito local (cuando termina la función desaparece , ocupa menos espacio)
//variable de ambito global 

//3)Dados los catetos de un triangulo rectangulo,  calcular su hipotenusa

function calcularHipotenusa(a,b){

    //Math.pow(a,2) es equivalente a a la potencia 2
    const hipotenusa= Math.sqrt(a**2+b**2);

    return hipotenusa;

}

let resultadoHipotenusa= calcularHipotenusa(10,20)
///console.log(resultadoHipotenusa)

//4)DAdos dos numeros, mostrar suma, resta division y multiplicación

function calculadora(a,b){
    document.write(a+b);
    document.write("<br>")
    document.write(a-b);
    document.write("<br>")
    document.write(a*b);
    document.write("<br>")
    document.write(a/b);
    
    console.warn(a+b);
    console.error(a-b);
    console.log(a*b);
    console.info(a/b);

}

//calculadora(5,4);

//5)calcular la media de tres numeros pedidos por teclado

function media(){
    //console.log("existo!!!")
    // ENLAZAR una variable en javascriot con el documento 
    //prompt(): usarla con precaución 
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z')

    //casting:transformar el tipo de dato de una variable en javascript
    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio = (x+y+z)/3
    console.log(promedio)

    //campo_x.value="hola mundo";

}

