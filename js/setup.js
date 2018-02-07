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

var wizards = [];

var wizardsCount = 4;

var getRandomElement = function (array) {
  var randElement = array[Math.floor(Math.random() * array.length)];
  return randElement;
};

var generateWizardName = function () {
  var wizardFirstName = getRandomElement(wizardFirstNames);
  var wizardLastName = getRandomElement(wizardLastNames);
  var wizardName = wizardFirstName + ' ' + wizardLastName;
  return wizardName;
};

for (var i = 0; i < wizardsCount; i++) {
  var wizard = {
    name: generateWizardName(),
    eyesColor: getRandomElement(eyesColor),
    coatColor: getRandomElement(coatColor)
  };
  wizards.push(wizard);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizardsCount; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);
