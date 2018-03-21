'use strict';

(function () {
  var Keycode = {
    ESC: 27,
    ENTER: 13
  };

  var isEnterEvent = function (evt, action) {
    if(evt.keyCode === Keycode.ENTER) {
      action();
    }
  };

  var isEscEvent = function (evt, action) {
    if(evt.keyCode === Keycode.ESC) {
      action();
    }
  };

  window.keyboard = {
    isEnterEvent: isEnterEvent,
    isEscEvent: isEscEvent
  };
})();
