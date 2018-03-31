'use strict';

(function () {
  var STATUS_CODE = 200;
  var TIMEOUT = 10000; // ms

  var getStatus = function (url, method, onLoad, onError) {
    window.xhr = new XMLHttpRequest();
    window.xhr.responseType = 'json';

    window.xhr.addEventListener('load', function () {
      if (window.xhr.status === STATUS_CODE) {
        onLoad(window.xhr.response); // функция из параметра
        if (method === 'GET') {
          window.wizards.render(window.data.wizards);
        }
      } else {
        onError('Статус ответа: ' + window.xhr.status + ' ' + window.xhr.statusText);
      }
    });

    window.xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения'); // загрузки не было
    });

    window.addEventListener('timeout', function () {
      onError('Запрос не успел выволниться за ' + window.xhr.timeout + ' мс');
    });

    window.xhr.timeout = TIMEOUT;
    window.xhr.open(method, url);
  };

  var save = function (data, onLoad, onError) {
    getStatus('https://js.dump.academy/code-and-magick', 'POST', onLoad, onError);
    window.xhr.send(data);
  };

  var load = function (onLoad, onError) {
    getStatus('https://js.dump.academy/code-and-magick/data', 'GET', onLoad, onError);
    window.xhr.send();
  };

  load(window.data.load, window.utils.error); // загрузка и ошибку

  window.backend = {
    save: save
  };
})();
