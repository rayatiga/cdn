const CACHE_NAME = `pawonkos799-v1`
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      cache.addAll(['/', '/about/', '/about/', '/contact/', '/link/', '/nov/', '/res/hki-pawonkos799.pdf', '/res/manual-pawonkos799.pdf', '/res/sus-pawonkos799.pdf', '/shop/', 'https://cdn.rayatiga.com/pawonkos799/css/icon.css', 'https://cdn.rayatiga.com/pawonkos799/css/main.css', 'https://cdn.rayatiga.com/pawonkos799/css/utility.min.css', 'https://cdn.rayatiga.com/pawonkos799/font/icon.woff', 'https://cdn.rayatiga.com/pawonkos799/font/icon.woff2', 'https://cdn.rayatiga.com/pawonkos799/font/work-sans.ttf', 'https://cdn.rayatiga.com/pawonkos799/media/product/2-pack-cumi-lumur-sambal.png', 'https://cdn.rayatiga.com/pawonkos799/media/product/2-pack-ikan-kicik-daun-jeruk.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/ayam-cumi-lumur-sambal.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/ayam-lumur-sambal.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/batagor-kuah-free-sosis.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/bundling-3-cumi-seblak-ikan.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/bundling-4-cumi-ayam-seblak-ikan.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/combo-3-cumi-lumur-sambal.png', 'https://cdn.rayatiga.com/pawonkos799/media/product/cumi-lumur-sambal.png', 'https://cdn.rayatiga.com/pawonkos799/media/product/dua-pack-ayam-lumur-sambal.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/ikan-kicik-daun-jeruk.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/seblak-cuankie.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/product/tuna-suwir-cabe-ijo.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/bca-logo.png', 'https://cdn.rayatiga.com/pawonkos799/media/hero.jpg', 'https://cdn.rayatiga.com/pawonkos799/media/nav-logo.png', 'https://cdn.rayatiga.com/pawonkos799/media/pawonkos799-big-favicon.png', 'https://cdn.rayatiga.com/pawonkos799/media/shopee-logo.png', 'https://cdn.rayatiga.com/pawonkos799/media/thrift.bymisora.png', 'https://cdn.rayatiga.com/pawonkos799/js/angular.min.js', 'https://cdn.rayatiga.com/pawonkos799/js/main.js', 'https://cdn.rayatiga.com/pawonkos799/js/nov.js', 'https://cdn.rayatiga.com/pawonkos799/js/product.js', 'https://cdn.rayatiga.com/pawonkos799/js/utility.min.js'])
    })()
  )
})
self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      const cachedResponse = await cache.match(event.request)
      if (cachedResponse) {
        return cachedResponse
      } else {
        try {
          const fetchResponse = await fetch(event.request)
          cache.put(event.request, fetchResponse.clone())
          return fetchResponse
        } catch (e) {}
      }
    })()
  )
})
