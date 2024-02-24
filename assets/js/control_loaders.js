$(function () {
  const iframesObjetos = $(".iframe_contenedor_proyecto");
  const contenedorLoaderObjetos = $(".contenedor_loader ");
  for (let i = 0; i < iframesObjetos.length; i++) {
    $(iframesObjetos[i]).on("load", function () {
      $(contenedorLoaderObjetos[i]).hide();
      $(iframesObjetos[i]).show();
    });

    /*
Si evento loader no se ejecuta luego de 3 segundos, entonces cargar lo que tenga el iframe
*/
    setTimeout(() => {
      $(contenedorLoaderObjetos[i]).hide();
      $(iframesObjetos[i]).show();
    }, 2000);
  }
});
