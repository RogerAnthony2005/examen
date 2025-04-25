//1. convertir la siguiente funcion a una funcion flecha  ennuna solo linea sin llaves(1p)
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Convertida a función flecha de una sola línea sin llaves

const esPar = numero => numero % 2 === 0;

//2. Crear unha funcion callback que acepte un arreglo de numeros y una funcion callback donde duplique cada elemento del arreglo 

function procesarArreglo(arr, callback) {
  return arr.map(callback);
}

const duplicar = num => num * 2;

//3. Usando los metodos setTimeOut y setInterval crear un contador que disminuya del 5 al 0 
// Dado el siguiente arreglo:
const libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { id: 2, titulo: "La casa de lo Espiritus", autor: "Isabel Allende", año: 1982 },
  { id: 3, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 },
  { id: 4, titulo: "El código Da Vinci", autor: "Dan Brown", año: 2005 }
];


let contador = 5;
const interval = setInterval(() => {
  console.log(contador);
  contador--;
  if (contador < 0) {
    clearInterval(interval);
    console.log("¡Tiempo terminado!");
  }
}, 1000);



//4. Cambiar el nombre del libro con id 3 a Final del juego usando for..of


const libros = [

  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { id: 2, titulo: "La casa de los Espíritus", autor: "Isabel Allende", año: 1982 },
  { id: 3, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 },
  { id: 4, titulo: "El código Da Vinci", autor: "Dan Brown", año: 2005 }
];


//5. Crear una  funcion que muestre solo los titulos de arreglo libros usando for..of


for (let libro of libros) {
  if (libro.id === 3) {
    libro.titulo = "Final del juego";
  }
}



// 6. Mostrar solo los títulos del arreglo libros
function mostrarTitulos(libros) {
  for (let libro of libros) {
    console.log(libro.titulo);
  }
}
mostrarTitulos(libros)