'use strict';

(function () {
  var currentArtifacts = document.querySelector('.setup-artifacts');
  var shopElement = document.querySelector('.setup-artifacts-shop');

  var artifactsCells = document.querySelectorAll('.setup-artifacts-cell');

  var dragged;

  artifactsCells.draggable = 'true';
  shopElement.addEventListener('dragstart', function (evt) {
    dragged = evt.target;
    currentArtifacts.style.outline = '2px dashed red';
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  });

  currentArtifacts.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  currentArtifacts.addEventListener('drop', function (evt) {
    evt.target.appendChild(dragged);
    evt.target.style.background = '';
    currentArtifacts.style.outline = '';
    evt.preventDefault();
  });

  currentArtifacts.addEventListener('dragenter', function (evt) {
    evt.target.style.background = 'yellow';
    currentArtifacts.style.outline = '2px dashed red';
    evt.preventDefault();
  });

  currentArtifacts.addEventListener('dragleave', function (evt) {
    evt.target.style.background = '';
    evt.preventDevault();
    evt.preventDevault();
  });
})();
