$(document).ready(function () {
  $('.texto').focus(function () {
    $('.texto').addClass('textoDesplegado')
  })
  $('.encriptacion').focus(function () {
    $('.encriptacion').addClass('textoDesplegado')
  })

})





const textarea = document.getElementById("hola");
textarea.addEventListener("input", function() { this.style.height = ""; 
this.style.height = this.scrollHeight + "px"; });