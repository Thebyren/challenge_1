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
      $('.muñecoAlura').show() // Mostrar el vector
      $('.sinTexto').show() // Mostrar el texto
      $('.copiar').hide() // oculta el boton copiar
      $('.resultado').hide() // Ocultar el texto encriptado
    } else {
      $('.muñecoAlura').hide() // Oculta el vector
      $('.sinTexto').hide() // Oculta el texto
      $('.copiar').show() // Mostrar el boton copiar
      $('.resultado').html(desencriptado).show() // Muestra el texto encriptado
    }
  })
})
