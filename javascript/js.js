$(document).ready(function () {
  
  //----------------------[boton para copiar contenido des/encriptado]----------------------//
  $('.copiar').click(function() {
    let resultado = $('.resultado');
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(resultado[0]);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand('copy');
    $('.copiar').html('copiado <img src="./contenido/clipboard.svg">')
    $('.copiar').css({
      backgroundColor: '#00ffbb'
    });
  });

  //---------------------------[funcion reguladora de altura]---------------------------//
  $('.texto').on('input', function() {
    $(this).height(0);
    $(this).height(this.scrollHeight);
  })
  //-------------------------[funcion de monitereo de caracteres]-------------------------//
  $('.texto').on('keydown', function () {
    // Obtiene el valor del textarea y calcula la cantidad de caracteres
    var texto = $(this).val()
    var cantidad = texto.length
    // Actualiza el elemento con el ID "contador" con la cantidad de caracteres
    $('#contador').text(cantidad)
    
    //[agregado, cambia el estilo del contado segun la cantidad de caracteres insertados]//
    function colorDeContador(color) {
      document.querySelector('#contador').setAttribute('style', color);
    } 
    if (cantidad > 250) {
      colorDeContador('color : rgb(204, 111, 111)')
    } else if (cantidad > 200) {
      colorDeContador('color: rgb(240, 201, 27)')
    } else {
      colorDeContador('color: #777')
    }
  })
})
