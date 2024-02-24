$(function () {
  const elementosContenedorSubsecciones = $(
    ".menu_lateral_contenedor_subsecciones"
  );
  $(".menu_lateral_titulo_seccion").each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("expanded_titulo_seccion_menu_lateral");
      const elementoContenedorSubseccion = $(
        elementosContenedorSubsecciones[index]
      );
      if ($(this).hasClass("expanded_titulo_seccion_menu_lateral")) {
        elementoContenedorSubseccion.slideUp("slow");
      } else {
        elementoContenedorSubseccion.slideDown("slow");
      }
    });
  });
});
