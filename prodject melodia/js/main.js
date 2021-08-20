$(document).ready(function () {
  var currentFloor = 2; // переменная с текущем этажем 
  var floorPath = $(".home-image path"); // кажый отдельный этаж в SVG
  var counterUp = $(".counter-up");  /* кнопка увилечения этажа */
  var counterDown = $(".counter-down");  /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  // функция при наведении мышью на этаж
  floorPath.on ("mouseover", function () {
    floorPath.removeClass("current-floor"); /* удаляем активный класс у этажей */
    currentFloor = $(this).attr('data-floor'); // получаем значения текущего этажа
    $(".counter").text(currentFloor); // записываем значения этажа в счетчик 
  });


  floorPath.on("click", toggleModal); /* при клике на этаж, вызывает окно */
  modalCloseButton.on("click", toggleModal); /* клик на кнопку закрыть убирает этаж */
  viewFlatsButton.on("click", toggleModal);

  counterUp.on ("click", function () {  // отслеживаем клик по кнопки 
    if (currentFloor < 18) { // проверяем значения этажа, оно не должно превышать 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString ('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажем, чтоб было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значения в счетчиков с права
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString ('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    
    }
  });
  function toggleModal() { /* функция открыть закрыть окно */
    modal.toggleClass("is-open");
  }
});