$(function () {
  const elementosContenedorProyectos = $(".contenedor_proyecto");
  const largoElementos = elementosContenedorProyectos.length;

  //Ingreso Left a los 0,3,6,9
  for (let i = 0; i < largoElementos; i = 3 + i) {
    ScrollReveal().reveal(elementosContenedorProyectos[i], {
      origin: "left",
      distance: "100%",
      duration: 4000,
    });
  }
  //Ingreso Right a los 1,4,7,10
  for (let i = 1; i < largoElementos; i = 3 + i) {
    ScrollReveal().reveal(elementosContenedorProyectos[i], {
      origin: "right",
      distance: "100%",
      duration: 4000,
    });
  }
  //Ingreso Right a los 2,5,9,12
  for (let i = 2; i < largoElementos; i = 3 + i) {
    ScrollReveal().reveal(elementosContenedorProyectos[i], {
      origin: "bottom",
      distance: "100%",
      scale: 0.1,
      duration: 4000,
    });
  }
});
