'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3f329fd4d60acd8c3c5338f062199e47",
"assets/assets/imgs/projstruct/demoproject_wtree.png": "689b2e197e3184b3ed98fef915cea75a",
"assets/assets/imgs/projstruct/layout_basic.jpg": "112e228fe2162a277e14569a222d7151",
"assets/assets/imgs/projstruct/layout_widgetstree.png": "5c8efe7fb690251b7b56a3f0b84ae58d",
"assets/assets/imgs/projstruct/project1_2.png": "961e178f06425b1a6722c085de088fbf",
"assets/assets/imgs/projstruct/projstruct_1.png": "aeafbd40ec7536530d9837f31054ad35",
"assets/assets/imgs/projstruct/projstruct_2.png": "839ad949a7d669c94152ea7ce0a8dfe5",
"assets/assets/imgs/projstruct/projstruct_3.png": "8e307f3d5291fb7caa9ffe48cc49f750",
"assets/assets/imgs/projstruct/projstruct_4.png": "16e3f1008f01869a10f14212e2c6bf76",
"assets/assets/imgs/projstruct/proj_struc_exer_11.png": "756ef2feb7404aa8187b8497adc1b819",
"assets/assets/imgs/projstruct/proj_struc_exer_12.png": "f41b761af32bdad212fefcf8ce4419e8",
"assets/assets/imgs/projstruct/res.zip": "4c69c4c51a6424cf26b21439ccaea0e2",
"assets/assets/imgs/projstruct/stateful.png": "3c2f87cfcf68c283bae1ca7a5e7471d2",
"assets/assets/imgs/projstruct/stateless.png": "80208f8a742043c456954ce437473d4e",
"assets/assets/imgs/widgetstree/appbar-1.png": "c844166bf8bd9d03560bc7323b5bf385",
"assets/assets/imgs/widgetstree/appbar-2.png": "b6c2b97d85ec2a1b0749948fc2299738",
"assets/assets/imgs/widgetstree/appbar-3.png": "d98005128b47d4f17e4e80e8dcc9ef23",
"assets/assets/imgs/widgetstree/appbar-4.png": "d0ffc80b5c3d854db56a216e4e90eea1",
"assets/assets/imgs/widgetstree/icon-1.png": "d3d8a49fc1c71ea98ae5e0dd132034a3",
"assets/assets/imgs/widgetstree/icon-2.png": "a4f06e85042e245a8cd6a49cbd014317",
"assets/assets/imgs/widgetstree/layout_example.jpg": "112e228fe2162a277e14569a222d7151",
"assets/assets/imgs/widgetstree/layout_widgetstree.png": "bde8747163bd5d706fad0be0fc54a04e",
"assets/assets/imgs/widgetstree/scaffold-1-class.png": "79a548d7cb4f505833e30a20e0b4a451",
"assets/assets/imgs/widgetstree/scaffold-1-wtree.png": "09285065f3f7e79d91ff129a4b0df6b4",
"assets/assets/imgs/widgetstree/scaffold-1.png": "5d3a27aa6bfdf08836629cdbb80b88d8",
"assets/assets/imgs/widgetstree/scaffold-2-class.png": "8b27774a0ac7b232a5e51a89f69db509",
"assets/assets/imgs/widgetstree/scaffold-2-wtree.png": "495bea42ca468e9cf0783ac865078367",
"assets/assets/imgs/widgetstree/scaffold-2.png": "482a7c449f3961c96949675bcc16efe0",
"assets/assets/imgs/widgetstree/scaffold-3.png": "8e87e74075caefc808f1cd1dcf4cde90",
"assets/assets/imgs/widgetstree/scaffold-4-class.png": "e356b0f2b4f50529420da41557636cb7",
"assets/assets/imgs/widgetstree/scaffold-4-wtree.png": "e995ceb3635ccd9b32f36040d50b0402",
"assets/assets/imgs/widgetstree/scaffold-4.png": "0e7d7810cfd8fc0a946d1e8a57a0a956",
"assets/assets/imgs/widgetstree/scaffold-5-class.png": "750b803a26d640e0d3ee83065078ee5c",
"assets/assets/imgs/widgetstree/scaffold-5-wtree.png": "7f2a56e444d8b6cb2d215da9bbcf56d8",
"assets/assets/imgs/widgetstree/scaffold-5.png": "606079b4089f163c8f400d648da76f9b",
"assets/assets/imgs/widgetstree/stateful.png": "3c2f87cfcf68c283bae1ca7a5e7471d2",
"assets/assets/imgs/widgetstree/stateless.png": "80208f8a742043c456954ce437473d4e",
"assets/assets/imgs/widgetstree/text-1.png": "62fb1398683b417e3894436b0499cdc0",
"assets/assets/imgs/widgetstree/text-2.png": "20247496523ce73b9d254e56b2fd2ee0",
"assets/assets/imgs/widgetstree/text-3.png": "af29c6a04f48c30cd5e496017a11540d",
"assets/assets/imgs/widgetstree/textrich-1.png": "33398ef2b7704e7b83c7847d0eb48ce0",
"assets/assets/imgs/widgetstree/textrich-2.png": "92886b7c71da45979cf8dc23e9fd4cc4",
"assets/assets/imgs/widgetstree/textrich-3.png": "8fbe1d19be01a85149cf243b112dda76",
"assets/FontManifest.json": "34ddef81b9550af16c27085609d57825",
"assets/fonts/jf-openhuninn-1.1.ttf": "e9ac35c6bbbe38b480fcce7f72d26c9d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "37291d8e6c8f76107b36e591e24510db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fe75ffc5729cca259a49d7d63d54868a",
"/": "fe75ffc5729cca259a49d7d63d54868a",
"main.dart.js": "26f6ba553b6f31938cbe86f4195b545b",
"manifest.json": "dfbba9d0d5fbb91bee18ea99cd524dfa",
"version.json": "045e9c8bec40172cd264ae7b907f6480"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
