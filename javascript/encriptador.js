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
      $('.contenedorSide').show() // Mostrar el vector
      $('.contenedorResultado').hide() // Mostrar el boton copiar
      $('.muñecoAlura').show();
      $('sintexto').show();
    } else {
      $('.copiar').show() // oculta el boton copiar
        $('.contenedorSide').hide() // Oculta el texto
        $('.contenedorResultado').show() // Mostrar el boton copiar
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
    $('.copiar').html('copiado <img src="./contenido/clipboard.svg">')
    $('.copiar').css({
      backgroundColor: '#00ffbb'
    });
  });
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
