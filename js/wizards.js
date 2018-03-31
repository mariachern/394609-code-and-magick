'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var fragment = document.createDocumentFragment();

  // рендеринг похожих волшебников
  var create = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };


  var render = function (wizards) {
    var wizardsNumber = wizards.length > 4 ? 4 : wizards.length;

    for (var i = 0; i < wizardsNumber; i++) {
      fragment.appendChild(create(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  };

  window.wizards = {
    render: render
  };
})();
