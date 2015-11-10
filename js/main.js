$(document).ready(function () {

  var randomElem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  $('.post-container.random-color').each(function (i, elem) {
    $(elem).addClass(randomElem(['red', 'green', 'blue']));
  });
});
