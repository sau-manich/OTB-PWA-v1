$(document).ready(function(){
    listaRaza();
  });

  function listaRaza()
  {
    $.ajax({
      method:'POST',
      url:'../../../../Controlador/razaControlador.php?opc=listar',
      data: ''
    }).done(function(info){
      $('#pruebita').html(info);
      console.log("--------------------");
      var data = JSON.parse(info);
      console.log(data);
      for (var i = 0; i < data.length; i++)
      {
        $('#razaTabla').append('<tr>');
        $('#razaTabla').append('<td> '+data[i]['id_raza']+'</td>');
        $('#razaTabla').append('<td> '+data[i]['nombreRaza']+'</td>');
        $('#razaTabla').append('<td> '+data[i]['descripcionRaza']+'</td>');
        $('#razaTabla').append('</tr>');
      }

    });
  }
