'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500; // ms

  var lastTimeout;

  var debounce = function (fun) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(fun, DEBOUNCE_INTERVAL);
  };

  var showError = function (errorMessage) {
    var node = document.createElement('div');
    var nodeClose = document.createElement('button');
    nodeClose.innerHTML = '<img src="img/icon-cross.png">';

    node.classList.add('error-message');
    nodeClose.classList.add('error-message-close');

    node.textContent = errorMessage;
    node.appendChild(nodeClose);

    nodeClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      node.remove();
    });

    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.utils = {
    error: showError,
    debounce: debounce
  };
})();
