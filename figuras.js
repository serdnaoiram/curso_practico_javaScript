//Código del Cuadrado
console.group("Cuadrados")
//Lado del cuadrado
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
//Perimetro del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");
//Area del cuadrado
function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
console.groupEnd();


//Código del Triangulo
console.group("Triangulo");
//Lados de triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo =5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
// console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
//Area del triangulo
function areaTriangulo(base, altura){
    return (base * altura)/2;
} 
// console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
function isIsosceles(lado1, lado2, lado3){
    var altura
    if (lado1 === lado2){
        altura = alturaTrianguloIsoseles(lado1, lado2, lado3)
    }else if (lado1 === lado3){
        altura = alturaTrianguloIsoseles(lado1, lado3, lado2)
    }else if (lado2 === lado3){
        altura = alturaTrianguloIsoseles(lado2, lado3, lado1)
    }else {
        altura = "Las medidas dadas no corresponden con las de un trianulo isósceles, por favor intentalo nuevamente"
    }
    return altura
}
function alturaTrianguloIsoseles(lado1, lado2, base){
    altura = Math.sqrt((lado1**2-((base/2)**2)))
    return altura
}

console.groupEnd();


//Código del Circulos
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
// console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
// console.log("PI es " + PI + ".");
// Perimetro
function perimetroCirculo(radio){
    console.log('radio en funciotn' + radio)
    const diametro = diametroCirculo(radio)
    console.log('diametro circulo' + diametro)
    return diametro * PI;
}
// console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
function areaCirculo(radio){
    return PI * (radio**2);
} 
// console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();

function CalcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value
    
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function CalcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value
    console.log(typeof(value))
    
    const area = areaCuadrado(value)
    alert(area)
}

function CalcularPerimetroTriangulo(){
    const inputL1 = document.getElementById('InputTrianguloL1')
    const valueL1 = parseInt(inputL1.value)    
    
    const inputL2 = document.getElementById('InputTrianguloL2')
    const valueL2 = parseInt(inputL2.value)

    const inputBase = document.getElementById('InputTrianguloBase')
    const valueBase = parseInt(inputBase.value)

    const perimetro = perimetroTriangulo(valueL1, valueL2, valueBase)
    alert(perimetro)
}

function CalcularAreaTriangulo(){
    const inputBase = document.getElementById('InputTrianguloBase')
    const valueBase = parseInt(inputBase.value)    
    
    const inputAltura = document.getElementById('InputTrianguloAltura')
    const valueAltura = parseInt(inputAltura.value)
    
    const area = areaTriangulo(valueBase, valueAltura)
    alert(area)
}

function CalcularDiametroCirculo(){
    const inputRadio = document.getElementById('InputCirculoRadio')
    const valueRadio = parseInt(inputRadio.value)
    
    const diametro = diametroCirculo(valueRadio)
    alert(diametro)
}

function CalcularPerimetroCirculo(){
    const inputRadio = document.getElementById('InputCirculoRadio')
    const valueRadio = parseFloat(inputRadio.value)
    
    const perimetro = perimetroCirculo(valueRadio)
    console.log(perimetro)
    alert(perimetro)
}

function CalcularAreaCirculo(){
    const inputRadio = document.getElementById('InputCirculoRadio')
    const valueRadio = parseFloat(inputRadio.value)
    
    const area = areaCirculo(valueRadio)
    alert(area)
}

function CalcularAlturaTrianguloIso(){
    const inputL1 = document.getElementById('InputTrianguloIsoL1')
    const valueL1 = parseInt(inputL1.value)    
    
    const inputL2 = document.getElementById('InputTrianguloIsoL2')
    const valueL2 = parseInt(inputL2.value)

    const inputIsoL3 = document.getElementById('InputTrianguloIsoL3')
    const valueL3 = parseInt(inputIsoL3.value)

    const altura = isIsosceles(valueL1, valueL2, valueL3)
    alert(altura)
}