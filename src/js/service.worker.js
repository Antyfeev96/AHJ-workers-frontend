/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
self.addEventListener('install', (event) => {
  console.log('Servise worker Установлен');
});

self.addEventListener('activate', (event) => {
  console.log('Service worker Активирован');
});

self.addEventListener('fetch', (event) => {
  console.log('Происходит запрос на сервер', event);
});
