'use strict';

(function () {
  var Wizard = {
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    FIREBALLS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var COLOR_COUNTER = 0;

  var userWizard = document.querySelector('.setup-wizard');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.getElementsByName('input[name=eyes-color]');
  var userWizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.getElementsByName('input[name=fireball-color]');

  var userWizardCoat = userWizard.querySelector('.wizard-coat');
  var userWizardEyes = userWizard.querySelector('.wizard-eyes');

  var changeColor = function (array) {
    COLOR_COUNTER++;
    if (COLOR_COUNTER === array.length) {
      COLOR_COUNTER = 0;
    }
    return array[COLOR_COUNTER];
  };

  userWizardCoat.addEventListener('click', function () {
    userWizardCoat.style.fill = changeColor(Wizard.COAT);
    wizardCoatInput.value = userWizardCoat.style.fill;
    window.filters.updateWizards();
  });

  userWizardEyes.addEventListener('click', function () {
    userWizardEyes.style.fill = changeColor(Wizard.EYES);
    wizardEyesInput.value = userWizardEyes.style.fill;
    window.filters.updateWizards();
  });

  userWizardFireball.addEventListener('click', function () {
    wizardFireballInput.value = changeColor(Wizard.FIREBALLS);
    userWizardFireball.style.background = wizardFireballInput.value;
  });

  window.userWizard = {
    coat: wizardCoatInput,
    eyes: wizardEyesInput
  };
})();
