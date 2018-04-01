'use strict';

(function () {
  var userCoatColor;
  var userEyesColor;

  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === userCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === userEyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    userCoatColor = window.userWizard.coat.value;
    userEyesColor = window.userWizard.eyes.value;

    window.wizards.render(window.data.wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }

      return rankDiff;
    }));
  };

  window.filters = {
    updateWizards: updateWizards
  };
})();
