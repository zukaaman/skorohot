$(document).ready(function(){
  ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
      myMap = new ymaps.Map("map", {
        center: [44.894997, 37.316259],
        zoom: 12
      });

      myPlacemark = new ymaps.Placemark([44.877914, 37.333148], {}, {
        iconLayout: 'default#image',
      });

      myMap.geoObjects.add(myPlacemark);

      myMap.behaviors.disable('scrollZoom');
    }
});
