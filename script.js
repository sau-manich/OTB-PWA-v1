// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//       .then(reg => console.log('Registro de SW exitoso', reg))
//       .catch(err => console.warn('Error al tratar de registrar el sw', err))
//   }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function() {
          console.log('ServiceWorker registrado con exito!');
      })
      .catch(function(err) {
          console.log('ServiceWorker no se registro :(', err);
      });
  });
}