$(document).ready(function () {
  const texto = $('.texto').first()
  $('#desencriptar').click(() => {
    const textoOpt = texto.val()

    function desencriptar(textoEncriptado) {
      let listaDesencriptadora = [
        ['ai', 'a'],
        ['enter', 'e'],
        ['imes', 'i'],
        ['ober', 'o'],
        ['ufat', 'u'],
      ]
      let textoDesencriptado = textoEncriptado
      for (const [encriptado, original] of listaDesencriptadora) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(encriptado, 'g'), original)
      }
      return textoDesencriptado
    }

    desencriptado = desencriptar(textoOpt)
    if (desencriptado === '') {
      $('.contenedorSide').show() // Mostrar el vector
      $('.contenedorResultado').hide() // Mostrar el boton copiar
      $('.muñecoAlura').show();
      $('sintexto').show();
    } else {
      $('.copiar').show() // oculta el boton copiar
        $('.contenedorSide').hide() // Oculta el texto
        $('.contenedorResultado').show() // Mostrar el boton copiar
      $('.resultado').html(desencriptado).show() // Muestra el texto encriptado
    }
  })
})
