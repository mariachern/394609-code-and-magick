'use strict';

var ESC_KEYCODE = 27;

var ENTER_KEYCODE = 13;

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var WIZARDS_COUNTER = 4;

var wizards = [];

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var userWizard = document.querySelector('.setup-wizard');

var userWizardCoat = userWizard.querySelector('.wizard-coat');

var userWizardEyes = userWizard.querySelector('.wizard-eyes');

var userWizardFireball = document.querySelector('.setup-fireball-wrap');

var userDialog = document.querySelector('.setup');

var setupOpen = document.querySelector('.setup-open');

var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var getRandomElement = function (array) {
  var randElement = array[Math.floor(Math.random() * array.length)];
  return randElement;
};

var generateWizardName = function () {
  var wizardFirstName = getRandomElement(WIZARD_FIRST_NAMES);
  var wizardLastName = getRandomElement(WIZARD_LAST_NAMES);
  var wizardName = wizardFirstName + ' ' + wizardLastName;
  return wizardName;
};

for (var i = 0; i < WIZARDS_COUNTER; i++) {
  var randomWizard = {
    name: generateWizardName(),
    eyesColor: getRandomElement(EYES_COLORS),
    coatColor: getRandomElement(COAT_COLORS)
  };
  wizards.push(randomWizard);
}

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

var colorCount = 0;

var changeColor = function (array) {
  colorCount++;
  if (colorCount === array.length) {
    colorCount = 0;
  }
  return array[colorCount];
};

userWizardCoat.addEventListener('click', function () {
  userWizardCoat.style.fill = changeColor(COAT_COLORS);
});

userWizardEyes.addEventListener('click', function () {
  userWizardEyes.style.fill = changeColor(EYES_COLORS);
});

userWizardFireball.addEventListener('click', function () {
  userWizardFireball.style.background = changeColor(FIREBALLS);
});
