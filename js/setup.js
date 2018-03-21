'use strict';

(function () {
  var WizardName = {
    FIRST: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    LAST: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
  };
  var WIZARDS_COUNTER = 4;

  var StartDialogCoords = {
    Y: '80px',
    X: '50%'
  };

  var wizards = [];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var dialogOpen = document.querySelector('.setup-open');
  var dialogClose = document.querySelector('.setup-close');

  var artifactsCells = window.dialog.setup.querySelectorAll('.setup-artifacts-cell');

  var shopElement = document.querySelector('.setup-artifacts-shop');

  artifactsCells.draggable = 'true';

  window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');

  var getRandomElement = function (array) {
    var randElement = array[Math.floor(Math.random() * array.length)];
    return randElement;
  };

  var resetDialogPosition = function () {
    window.dialog.setup.style.top = StartDialogCoords.Y;
    window.dialog.setup.style.left = StartDialogCoords.X;
  };

  var openDialog = function () {
    window.dialog.setup.classList.remove('hidden');
    document.addEventListener('keydown', onDialogEscPress);
    resetDialogPosition();
  };

  var closeDialog = function () {
    window.dialog.setup.classList.add('hidden');
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

  // похожие волшебники
  var generateWizardName = function () {
    var wizardFirstName = getRandomElement(WizardName.FIRST);
    var wizardLastName = getRandomElement(WizardName.LAST);
    var wizardName = wizardFirstName + ' ' + wizardLastName;
    return wizardName;
  };

  for (var i = 0; i < WIZARDS_COUNTER; i++) {
    var randomWizard = {
      name: generateWizardName(),
      eyesColor: getRandomElement(window.Wizard.eyes),
      coatColor: getRandomElement(window.Wizard.coat)
    };
    wizards.push(randomWizard);
  }

  // рендеринг похожих волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var j = 0; j < WIZARDS_COUNTER; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
  var dragged;

  var currentArtifacts = document.querySelector('.setup-artifacts');

  shopElement.addEventListener('dragstart', function (evt) {
    dragged = evt.target;
    currentArtifacts.style.outline = '2px dashed red';
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  });

  currentArtifacts.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  currentArtifacts.addEventListener('drop', function (evt){
    evt.target.appendChild(dragged);
    evt.target.style.background = '';
    currentArtifacts.style.outline = '';
    evt.preventDefault;
  });

  currentArtifacts.addEventListener('dragenter', function (evt) {
    evt.target.style.background = 'yellow';
    currentArtifacts.style.outline = '2px dashed red';
    evt.preventDefault();
  });

  currentArtifacts.addEventListener('dragleave', function (evt) {
    evt.target.style.background = '';
    evt.preventDevault;
    evt.preventDevault;
  });
})();
