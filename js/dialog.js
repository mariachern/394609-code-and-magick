'use strict';

(function () {
  var StartDialogCoords = {
    Y: '80px',
    X: '50%'
  };

  var dialogOpen = document.querySelector('.setup-open');
  var dialog = document.querySelector('.setup');

  var dialogForm = dialog.querySelector('.setup-wizard-form');
  var dialogHandle = dialog.querySelector('.upload');
  var dialogClose = dialog.querySelector('.setup-close');

  dialog.querySelector('.setup-similar').classList.remove('hidden');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      dialog.style.top = (dialog.offsetTop - shift.y) + 'px';
      dialog.style.left = (dialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        var resetPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', resetPreventDefault);
        };
        dialogHandle.addEventListener('click', resetPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var resetDialogPosition = function () {
    dialog.style.top = StartDialogCoords.Y;
    dialog.style.left = StartDialogCoords.X;
  };

  var openDialog = function () {
    dialog.classList.remove('hidden');
    document.addEventListener('keydown', onDialogEscPress);
    resetDialogPosition();
  };

  var closeDialog = function () {
    dialog.classList.add('hidden');
    document.removeEventListener('keydown', onDialogEscPress);
  };

  var onDialogEscPress = function (evt) {
    window.keyboard.isEscEvent(evt, closeDialog);
  };

  dialogOpen.addEventListener('click', function () {
    openDialog();
  });

  dialogOpen.addEventListener('keydown', function (evt) {
    window.keyboard.isEnterEvent(evt, openDialog);
  });

  dialogClose.addEventListener('click', function () {
    closeDialog();
  });

  dialogClose.addEventListener('keydown', function (evt) {
    window.keyboard.isEnterEvent(evt, closeDialog);
  });

  var onLoad = function () {
    closeDialog();
  };

  dialogForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(dialogForm), onLoad, window.utils.error);
  });

  window.dialog = {
    close: closeDialog
  };
})();
