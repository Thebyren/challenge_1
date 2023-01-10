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
    console.log(encriptado)
    if (encriptado === '') {
      $('.muñecoAlura').show() // Mostrar el vector
      $('.sinTexto').show() // Mostrar el texto
      $('.copiar').hide() // oculta el boton copiar
      $('.resultado').hide() // Ocultar el texto encriptado
    } else {
        $('.muñecoAlura').hide() // Oculta el vector
        $('.sinTexto').hide() // Oculta el texto
        $('.copiar').show() // Mostrar el boton copiar
      $('.resultado').html(encriptado).show() // Muestra el texto encriptado
    }
  })
  $('.copiar').click(function() {
    let resultado = $('.resultado');
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(resultado[0]);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand('copy');
    // Elimina esta línea:
    // seleccion.removeAllRanges();
  });
})
