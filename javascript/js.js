$(document).ready(function () {
  $('.texto').on('input', function () {
    $(this).css('height', 'auto')
    var height = Math.min(this.scrollHeight, 200)
    $(this).css('height', height + 'px')
  })
  $('.texto').on('keydown', function () {
    // Obtiene el valor del textarea y calcula la cantidad de caracteres
    var texto = $(this).val()
    var cantidad = texto.length
    // Actualiza el elemento con el ID "contador" con la cantidad de caracteres
    $('#contador').text(cantidad)

    if (cantidad > 250) {
      document
        .querySelector('#contador')
        .setAttribute('style', 'color : rgb(204, 111, 111)')
    } else if (cantidad > 200) {
      document.querySelector('#contador').setAttribute('style', 'color: rgb(240, 201, 27)')
    } else {
      document.querySelector('#contador').setAttribute('style', 'color: #777')
    }
  })
})
