'use strict';

(function () {
  var wizards = [];

  var load = function (data) {
    window.data.wizards = data;
  };

  window.data = {
    wizards: wizards,
    load: load
  };
})();
