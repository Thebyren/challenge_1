$(document).ready(function () {

  //---------------------------[funcion reguladora de altura]---------------------------//
  $('.texto').on('input', function () {
    $(this).css('height', 'auto')
    // calcula la altura del textarea y agrega espacio de altura segun la necesidad
    var height = Math.min(this.scrollHeight, 150)
    $(this).css('height', height + 'px') // se manipula la altura usando la variable height
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
