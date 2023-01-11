$(document).ready(function () {
  const texto = $('.texto').first()
  const encriptar = $('#encriptar')

  encriptar.click(function () {
    let textoOpt = texto.val()
    let caracteres = textoOpt.split('')
    let textoEncriptado = caracteres.map((caracter) => {
      if (caracter === 'a') {
        return 'ai'
      }
      if (caracter === 'e') {
        return 'enter'
      }
      if (caracter === 'i') {
        return 'imes'
      }
      if (caracter === 'o') {
        return 'ober'
      }
      if (caracter === 'u') {
        return 'ufat'
      }
      return caracter
    })
    let encriptado = textoEncriptado.join('')
    if (encriptado === '') {
      $('.contenedorSide').show() // Mostrar el vector
      $('.contenedorResultado').hide() // Mostrar el boton copiar
      console.log(screen.width)
      if (screen.width > 500) {
        $('.muñecoAlura').show();
      }
      $('sintexto').show();
    } else {
      $('.copiar').show() // oculta el boton copiar
        $('.contenedorSide').hide() // Oculta el texto
        $('.contenedorResultado').show() // Mostrar el boton copiar
      $('.resultado').html(encriptado).show() // Muestra el texto encriptado
    }
  })
  $('.desencriptar').click(()=>{
    $('.copiar').html('copiar <img src="./contenido/clipboard.svg">')
    $('.copiar').css({
      backgroundColor: '#ffffff'
    });
  })
  $('.encriptar').click(()=>{
    $('.copiar').html('copiar <img src="./contenido/clipboard.svg">')
    $('.copiar').css({
      backgroundColor: '#ffffff'
    });
  })
})
