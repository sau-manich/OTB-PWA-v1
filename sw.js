var CACHE_NAME = 'v1_cache_Agua-21';
  var urlsToCache = [
    '/',
    'vendors/animate.css/animate.min.css',
    'css/file.css',
    'vendors/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
    'vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
    'vendors/fullcalendar/dist/fullcalendar.min.js',
    'vendors/select2/dist/css/select2.min.css',
    'vendors/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
    'demo/css/demo.css',
    'demo/js/calendar.js',
    'css/app-1.min.css',
    'js/page-loader.min.js',
    'vendors/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js',
    'vendors/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
    'vendors/jquery/dist/jquery.min.js',
    'vendors/bootstrap/dist/js/bootstrap.min.js',
    'vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
    'vendors/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js',
    'vendors/moment/min/moment.min.js',
    'vendors/simpleWeather/jquery.simpleWeather.min.js',
    'vendors/select2/dist/js/select2.full.min.js',
    'vendors/salvattore/dist/salvattore.min.js',
    'vendors/flot/jquery.flot.js',
    'vendors/flot/jquery.flot.resize.js',
    'vendors/flot.curvedlines/curvedLines.js',
    'vendors/jquery.sparkline/jquery.sparkline.min.js',
    'vendors/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
    'demo/js/flot-charts/curved-line.js',
    'demo/js/flot-charts/line.js',
    'demo/js/easy-pie-charts.js',
    'demo/js/misc.js',
    'demo/js/sparkline-charts.js',
    'js/app.min.js',
    'script.js',
    'img/ico.png',
    'img/16.png'
  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache open!');
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  
  self.addEventListener('fetch', function(event) {
      event.respondWith(
          caches.match(event.request)
          .then(function(response) {
              // Cache hit - return response
              if (response) {
                  return response;
              }
              return fetch(event.request);
          })
      );
  });
  
  // self.addEventListener('activate', event => {
  //     // remove old caches
  //     event.waitUntil(
  //       caches.keys().then(keys => Promise.all(
  //         keys.map(key => {
  //           if (key != CACHE_NAME) {
  //             return caches.delete(key);
  //           }
  //         })
  //       )).then(() => {
  //         console.log('Now ready to handle fetches!');
  //       })
  //     );
  // });

  //******************************************************************************************************* */



  
// ;
// //asignar un nombre y versión al cache
// const CACHE_NAME = 'v1_cache_Agua-21',
//   urlsToCache = [
//     '/',
//     'vendors/animate.css/animate.min.css',
//     'css/file.css',
//     'vendors/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
//     'vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
//     'vendors/fullcalendar/dist/fullcalendar.min.js',
//     'vendors/select2/dist/css/select2.min.css',
//     'vendors/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//     'demo/css/demo.css',
//     'demo/js/calendar.js',
//     'css/app-1.min.css',
//     'js/page-loader.min.js',
//     'vendors/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js',
//     'vendors/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//     'vendors/jquery/dist/jquery.min.js',
//     'vendors/bootstrap/dist/js/bootstrap.min.js',
//     'vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
//     'vendors/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js',
//     'vendors/moment/min/moment.min.js',
//     'vendors/simpleWeather/jquery.simpleWeather.min.js',
//     'vendors/select2/dist/js/select2.full.min.js',
//     'vendors/salvattore/dist/salvattore.min.js',
//     'vendors/flot/jquery.flot.js',
//     'vendors/flot/jquery.flot.resize.js',
//     'vendors/flot.curvedlines/curvedLines.js',
//     'vendors/jquery.sparkline/jquery.sparkline.min.js',
//     'vendors/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
//     'demo/js/flot-charts/curved-line.js',
//     'demo/js/flot-charts/line.js',
//     'demo/js/easy-pie-charts.js',
//     'demo/js/misc.js',
//     'demo/js/sparkline-charts.js',
//     'js/app.min.js',
//     'script.js',
//     'img/ico.png',
//     'img/16.png'
//   ]

// //durante la fase de instalación, generalmente se almacena en caché los activos estáticos
// self.addEventListener('install', e => {
//   e.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => {
//         return cache.addAll(urlsToCache)
//           .then(() => self.skipWaiting())
//       })
//       .catch(err => console.log('Falló registro de cache', err))
//   )
// })

// //una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
// self.addEventListener('activate', e => {
//   const cacheWhitelist = [CACHE_NAME]

//   e.waitUntil(
//     caches.keys()
//       .then(cacheNames => {
//         return Promise.all(
//           cacheNames.map(cacheName => {
//             //Eliminamos lo que ya no se necesita en cache
//             if (cacheWhitelist.indexOf(cacheName) === -1) {
//               return caches.delete(cacheName)
//             }
//           })
//         )
//       })
//       // Le indica al SW activar el cache actual
//       .then(() => self.clients.claim())
//   )
// })

// //cuando el navegador recupera una url
// self.addEventListener('fetch', e => {
//   //Responder ya sea con el objeto en caché o continuar y buscar la url real
//   e.respondWith(
//     caches.match(e.request)
//       .then(res => {
//         if (res) {
//           //recuperar del cache
//           return res
//         }
//         //recuperar de la petición a la url
//         return fetch(e.request)
//       })
//   )
// })