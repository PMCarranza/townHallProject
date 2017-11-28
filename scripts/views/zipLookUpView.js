(function(module) {

  zipLookUpHandler = {};

  zipLookUpHandler.zipErrorResponse = function(errorMessage, error) {
    console.warn(error);
    var $text = $('.selection-results_content');
    $text.text(errorMessage);
  };

  // Perform zip search on load
  zipLookUpHandler.zipSearchByParam = function(){
    var zipcode = urlParamsHandler.getUrlParameter('zipcode');
    var district = urlParamsHandler.getUrlParameter('district');
    if (zipcode) {
      $('#look-up input').val(zipcode);
      eventHandler.lookup(document.createEvent('Event'));
    } else if (district) {
      if (district.split('-').length === 3) {
        //TODO: possible more checks to make sure this is a real district
        var feature = {
          state: district.split('-')[0],
          district:district.split('-')[1],
          geoID:district.split('-')[2],
        };
        mapView.districtSelect(feature);
      } else {
        urlParamsHandler.setUrlParameter('district', false);
      }
    }
  };

  module.zipLookUpHandler = zipLookUpHandler;
  
})(window);