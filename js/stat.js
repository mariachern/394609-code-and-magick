'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var LINE_HEIGHT = 30;
var BAR_WIDTH = 40;
var BAR_X = 140;
var BAR_GAP = 50;
var barHeight = CLOUD_HEIGHT - LINE_HEIGHT * 3 - FONT_GAP - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + FONT_GAP, LINE_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, LINE_HEIGHT + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var top = CLOUD_HEIGHT - Math.round((barHeight * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.round(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * i, top - GAP * 2);
    ctx.fillText(players[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP * 2);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      var getRandRGBA = function () {
        var randOpacity = (Math.ceil(Math.random() * 10)) / 10;
        return 'rgba(' + '0, ' + '0, ' + '255, ' + randOpacity + ')';
      };
      ctx.fillStyle = getRandRGBA();
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, top, BAR_WIDTH, CLOUD_HEIGHT - top - LINE_HEIGHT);
  }
};

