$(function () {
  const icono_hamburguesa = $("#hamburguer_icon");
  const menuLateral = $("#menuLateral");
  const objetoMenuLateral = new bootstrap.Offcanvas(menuLateral[0]);

  icono_hamburguesa.on("click", function () {
    $(this).toggleClass("open");
    objetoMenuLateral.toggle(); //método de la API de offcanvas de bootstrap
  });

  //evento de la API de offcanvas de bootstrap
  menuLateral.on("hide.bs.offcanvas", function () {
    icono_hamburguesa.removeClass("open");
  });
});

/*

Antes JS Vanilla
const icono_hamburguesa = document.getElementById("hamburguer_icon");
const menuLateral = document.getElementById("menuLateral");
const objetoMenuLateral = new bootstrap.Offcanvas(menuLateral);

icono_hamburguesa.addEventListener("click", function () {
  this.classList.toggle("open");
  objetoMenuLateral.toggle(); //método de la API de offcanvas de bootstrap
});

//evento de la API de offcanvas de bootstrap
menuLateral.addEventListener("hide.bs.offcanvas", function () {
  icono_hamburguesa.classList.remove("open");
});
*/
