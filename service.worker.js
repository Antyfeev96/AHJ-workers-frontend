/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
self.addEventListener('install', (event) => {
  console.log('Servise worker Установлен');
  // const newCache = 'cache-only-v1';
  // event.waitUntil(
  //   caches.open(newCache).then((cache) => cache.addAll([
  //     './',
  //     './index.html',
  //     './main.css',
  //     './main.js',
  //   ])),
  // );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker Активирован');
});

self.addEventListener('fetch', (event) => {
  console.log('Происходит запрос на сервер', event);
});

self.addEventListener('error', (event) => {
  console.log('Ошибка', event);
});
