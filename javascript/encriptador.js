$(document).ready(function() {
    const texto = $('.texto').first();
    const encriptar = $('#encriptar');
  
    encriptar.click(function() {
      let textoOpt = texto.val();
      let caracteres = textoOpt.split('');
      let textoEncriptado = caracteres.map(caracter =>{
          if (caracter === 'a') {
              return 'ai';
          }
          if (caracter === 'e') {
              return 'enter';
          }
          if (caracter === 'i') {
              return 'imes';
          }
          if (caracter === 'o') {
              return 'ober';
          }
          if (caracter === 'u') {
              return 'ufat';
          }
          return caracter;
      });
      let encriptado = textoEncriptado.join('');
      console.log(encriptado);
      if (encriptado === '') {
          $('.muñecoAlura').show();  // Mostrar la imagen
          $('.sinTexto').show();  // Mostrar la imagen
          $('.resultado').hide();    // Ocultar el texto encriptado
        } else {
        // Ocultar la imagen
        $('.muñecoAlura').hide();
        $('.sinTexto').hide();  // Mostrar la imagen
        // Mostrar el texto encriptado
        $('.resultado').html(encriptado).show();
      }
    });
  });