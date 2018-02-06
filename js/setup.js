'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var generateWizardName = function () {
  var wizardFirstName = wizardFirstNames[Math.floor(Math.random() * wizardFirstNames.length)];
  var wizardLastName = wizardLastNames[Math.floor(Math.random() * wizardLastNames.length)];
  var wizardName = wizardFirstName + ' ' + wizardLastName;
  return wizardName;
};

var wizards = [];
wizards.length = 4;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizard = {
    name: generateWizardName(),
    eyesColor: eyesColor[Math.floor(Math.random() * eyesColor.length)],
    coatColor: coatColor[Math.floor(Math.random() * coatColor.length)]
  };
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i <= wizards.length - 1; i++) {
  fragment.appendChild(renderWizard(wizard));
}

similarListElement.appendChild(fragment);
