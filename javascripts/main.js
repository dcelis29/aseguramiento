console.log('This would be the main JS file.');

/****************Ocultar/mostrar contenido********************/
var $contenido      = $("#contenido");
var $ver_contenido  = $("#ver_contenido");

function mostrarContenido(){
    $contenido.slideToggle();
    return false;
}

$ver_contenido.click(mostrarContenido);

/****************Ocultar/mostrar contenido1********************/
var $contenido1      = $("#contenido1");
var $ver_contenido1  = $("#ver_contenido1");

function mostrarContenido1(){
    $contenido1.slideToggle();
    return false;
}

$ver_contenido1.click(mostrarContenido1);

/****************Ocultar/mostrar contenido2********************/
var $contenido2      = $("#contenido2");
var $ver_contenido2  = $("#ver_contenido2");

function mostrarContenido2(){
    $contenido2.slideToggle();
    return false;
}

$ver_contenido2.click(mostrarContenido2);

/****************Ocultar/mostrar contenido3********************/
var $contenido3      = $("#contenido3");
var $ver_contenido3  = $("#ver_contenido3");

function mostrarContenido3(){
    $contenido3.slideToggle();
    return false;
}

$ver_contenido3.click(mostrarContenido3);

/****************Ocultar/mostrar contenido4********************/
var $contenido4      = $("#contenido4");
var $ver_contenido4  = $("#ver_contenido4");

function mostrarContenido4(){
    $contenido4.slideToggle();
    return false;
}

$ver_contenido4.click(mostrarContenido4);

/****************Menu estático********************/

// Create a clone of the menu, right next to original.
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
    $('.original').css('visibility', 'hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility', 'visible');
  }
}

/****************Scroll deslizante********************/

$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});