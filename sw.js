;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_Agua-21',
  urlsToCache = [
    './',
    'https://fonts.googleapis.com/css?family=Raleway:400,700',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
    'vendors/animate.css/animate.min.css',
    'vendors/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
    'vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
    'vendors/fullcalendar/dist/fullcalendar.min.css',
    'css/app-1.min.css',
    'js/page-loader.min.js',
    'vendors/jquery/dist/jquery.min.js',
    'vendors/bootstrap/dist/js/bootstrap.min.js',
    'vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
    'vendors/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js',
    'vendors/moment/min/moment.min.js',
    'vendors/fullcalendar/dist/fullcalendar.min.js',
    'vendors/simpleWeather/jquery.simpleWeather.min.js',
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
    'demo/js/calendar.js',
    'js/app.min.js',
    'script.js',
    'img/ico.png',
    'img/16.png'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})