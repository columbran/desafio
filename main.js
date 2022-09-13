const productos = [
  {
    nombre: "alfajor",
    precio: 120,
  },
  {
    nombre: "chocolate",
    precio: 350,
  },
  {
    nombre: "caramelos",
    precio: 70,
  },
  {
    nombre: "chicles",
    precio: 100,
  },
  {
    nombre: "gomitas",
    precio: 90,
  },
];

let carrito = [];

let seleccion = prompt("bienvenido a la tienda ¿eres mayor de 18?");

while (seleccion != "mayor de 18" && seleccion != "menor de 18") {
  alert("por favor ingresa mayor de 18 o menor de 18");
  seleccion = prompt("hola!! indique si eres mayor de 18 o menor");
}

if (seleccion == "mayor de 18") {
  alert("a continuacion la lista de productos");
  let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$\n");
  alert(todosLosProductos);
} else if (seleccion == "menor de 18") {
  alert("gracias por su visita lo esperamos la proxima!!");
}

while (seleccion != "no") {
  let producto = prompt("agrega un producto a tu carrito", "Ej: caramelos");
  let precio = 0;

  if (
    producto == "alfajor" ||
    producto == "chocolate" ||
    producto == "caramelos" ||
    producto == "chicles" ||
    producto == "gomitas"
  ) {
    switch (producto) {
      case "alfajor":
        precio = 120;
        break;
      case "chocolate":
        precio = 350;
        break;
      case "caramelos":
        precio = 70;
        break;
      case "chicles":
        precio = 100;
        break;
      case "gomitas":
        precio = 90;
        break;
      default:
        break;
    }
    let unidades = Number(prompt("cuantas unidades de ese producto desea llevar"));
    carrito.push({ producto, unidades, precio });
  } else {
    alert("no tenemos ese producto");
  }

  seleccion = prompt("quiere seguir comprando si o no");

  while (seleccion == "no") {
    alert("gracias por su compra!");

    carrito.forEach((carritoFinal) => {
      alert(
        `producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${
          carritoFinal.unidades * carritoFinal.precio}`);
    });
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`el total a pagar por su compra es de: ${total}`);
